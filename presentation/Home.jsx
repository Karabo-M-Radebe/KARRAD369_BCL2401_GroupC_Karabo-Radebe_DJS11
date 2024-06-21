import { CardPreview } from "../components/CardPreview/CardPreview";
import {useEffect, useState} from "react";
import { fetchPodcasts } from "../services/api";
import { _Carousel } from "../components/Carousel/Carousel";
import { useSearchParams } from "react-router-dom";
import { genreInfo } from "../services/genres";

export const Home = () => {

  const [allShows, setAllShows] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sorted, setSorted] =useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPodcasts();
        setAllShows(data);
        setSorted(data);
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
            <img src={show.image} alt={show.title} />
            <div className="podcast-info">
              <h3>{show.title}</h3>
              <p>Seasons: {show.seasons}</p>
              <button onClick={() => toggleFavorite(show)}>
                {favorites.some(fav => fav.id === show.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
, []}