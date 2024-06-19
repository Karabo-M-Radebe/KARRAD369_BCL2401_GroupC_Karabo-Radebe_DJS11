import { Navbar } from "../components/Navbar"
import { Card } from "../components/Card"
import {useEffect, useState} from "react"
import { useStore } from "../services/store"
import { fetchPodcasts } from "../api"

export const Home = ({}) => {


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

    console.log(allShows)

  const nightMode = useStore((state) => state.nightMode)
  const toggleNightMode = useStore((state) => state.toggleMode)

    return(
        <div className={nightMode}>
          <Navbar />
          <button onClick={toggleNightMode}>Toggle Mode</button>
          <div>
            {allShows?.map((show) => <Card image={show.image} title={show.title} seasons={show.seasons}/> )} 
          </div>
        </div>
    )
}