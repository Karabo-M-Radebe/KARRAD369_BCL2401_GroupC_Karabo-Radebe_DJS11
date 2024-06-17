import Navbar from "../components/Navbar"
import { Card } from "../components/Card"
import {useEffect, useState} from "react"
import { useStore } from "../services/store"

export const Home = ({}) => {

    const [allShows, setAllShows] = useState()
    useEffect(() => {
      fetch('https://podcast-api.netlify.app')
      .then(response => response.json())
      .then(data => setAllShows(data))
      .catch(error => {throw error})
    }, [])

    //console.log(allShows)

  const nightMode = useStore((state) => state.nightMode)
  const toggleNightMode = useStore((state) => state.toggleMode)

    return(
        <div className={nightMode}>
        <Navbar />
        <button onClick={toggleNightMode}>Toggle Mode</button>
         {allShows?.map((show) => <Card image={show.image} title={show.title} description={show.description}/> )} 
        </div>
    )
}