import { useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import {Card}  from '../components/Card';

export default function App() {
  const [allShows, setAllShows] = useState()
  useEffect(() => {
    fetch('https://podcast-api.netlify.app')
    .then(response => response.json())
    .then(data => setAllShows(data))

  }, [])

  return (
    <>
    <Navbar/>
    {allShows.map((show)=> <Card title={show.title} description={show.description}/> )}
    </>
  );
}


