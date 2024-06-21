import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../services/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(collection(db, "favourites"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const favs = querySnapshot.docs.map((doc) => doc.data());
        setFavourites(favs);
      }
    };
    fetchFavourites();
  }, []);

  return (
    <>
      <h1>Favourite Episodes</h1>
      {favourites.length === 0 ? (
        <p>No favourite episodes yet.</p>
      ) : (
        favourites.map((show) => (
          <Link to={`${show.id}`} key={show.id}>
            <div className="card-container">
              <div className="podcast-card">
                <img src={show.image} alt={show.title} />
                <div className="podcast-info">
                  <h3>{show.title}</h3>
                  <p>Seasons: {show.seasons}</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </>
  );
};
