import { CardPreview } from "../components/CardPreview/CardPreview";
import {useEffect, useState} from "react";
import { fetchPodcasts } from "../api";
import { _Carousel } from "../components/Carousel/Carousel";

export const Home = () => {

  const [allShows, setAllShows] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPodcasts();
        setAllShows(data);
        } catch (error) {
          setError(error)
      }
    }
    fetchData();
  }, [])

  // console.log(allShows)
 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return(
    <>
      {allShows.map(show => (
        <CardPreview key={show.id} image={show.image} title={show.title} seasons={show.seasons} />
      ))}
    </>
  )
, []}