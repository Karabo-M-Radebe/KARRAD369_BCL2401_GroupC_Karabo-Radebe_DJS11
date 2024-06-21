import { CardPreview } from "../components/CardPreview/CardPreview";
import {useEffect, useState} from "react";
import { fetchPodcasts } from "../services/api";
import { _Carousel } from "../components/Carousel/Carousel";
import { useSearchParams, Link } from "react-router-dom";
import { genreInfo } from "../services/genres";
import { auth, db } from "../services/firebaseConfig";
import { collection, addDoc, deleteDoc, doc, query, where, getDocs } from "firebase/firestore";
 
export const Home = () => {

  const [allShows, setAllShows] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sorted, setSorted] =useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPodcasts();
        setAllShows(data);
        setSorted(data);

        if (auth.currentUser) {
          const q = query(collection(db, "favourites"), where("userId", "==", auth.currentUser.uid));
          const querySnapshot = await getDocs(q);
          const favs = querySnapshot.docs.map((doc) => ({ ...doc.data(), docId: doc.id }));
          setFavourites(favs);
        }
        } catch (error) {
          setError(error)
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    const genreFilter = searchParams.get('genre')
    if (genreFilter) {
      const filteredShows = allShows.filter((show) => show.genre === genreFilter)
      setSorted(filteredShows)
      } else {
        setSorted(allShows)
        }
  }, [searchParams, allShows])

 const sortData = (value) => {
  let sortedShows = [...sorted];

  if (value === "Newest") {
    sortedShows.sort((a, b) => new Date(b.updated) - new Date(a.updated))
  } else if (value === "Oldest") {
    sortedShows.sort((a, b) => new Date(a.updated) - new Date(b.updated))
  } else if (value === "A-Z") {
    sortedShows.sort((a, b) => a.title.localeCompare(b.title))
  } else if (value === "Z-A") {
    sortedShows.sort((a, b) => b.title.localeCompare(a.title))
  }

  setSorted(sortedShows)
 };
 
 const toggleFavourite = async (episode) => {
  const user = auth.currentUser;
  if (!user) return;
  
  const favIndex = favourites.findIndex(fav => fav.id === episode.id);
  if (favIndex >= 0) {
    // Remove from favourites
    const favDoc = favourites[favIndex];
    await deleteDoc(doc(db, "favourites", favDoc.docId));
    setFavourites(favourites.filter(fav => fav.id !== episode.id));
  } else {
    // Add to favourites
    const favDoc = await addDoc(collection(db, "favourites"), {
      ...episode,
      userId: user.uid
    });
    setFavourites([...favourites, { ...episode, docId: favDoc.id }]);
  }
};

 const buttonGenre = Object.keys(genreInfo).map((key) => (
  <button key={key} className="genre-button" onClick={() => setSearchParams({genre: key})}>
    {genreInfo[key]}
  </button> 
 ))
 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!allShows.length) {
    return <div>Loading...</div>;
  }

  return(
    <>
      <div className="sort-btns">
        <button onClick={() => sortData("A-Z")}>A-Z</button>
        <button onClick={() => sortData("Z-A")}>Z-A</button>
        <button onClick={() => sortData("Newest")}>Newest</button>
        <button onClick={() => sortData("Oldest")}>Oldest</button>
      </div>

      <div>
        {buttonGenre}
      </div>

      {sorted.map((show) => (
        <div key={show.id} className="card-container">
          <div className="podcast-card">
          <Link to={`/${show.id}`}><img src={show.image} alt={show.title} /></Link>
            <img src={show.image} alt={show.title} />
            <div className="podcast-info">
              <h3>{show.title}</h3>
              <p>Seasons: {show.seasons}</p>
              <p>Last Updated: {new Date(show.updated).toLocaleString()}</p>
              {/* <button onClick={() => toggleFavourite(show)}>
                {favourites.some(fav => fav.id === show.id) ? 'Remove from Favourites' : 'Add to Favourites'}
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </>
  )
, []}