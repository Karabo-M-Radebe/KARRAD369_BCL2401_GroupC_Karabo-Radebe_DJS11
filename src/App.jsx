import { useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import {Card}  from '../components/Card';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from '../presentation/Home.jsx';
import { Favourites } from '../presentation/Favourites.jsx';

const router = createBrowserRouter([{
  path: "/",
  element:<Home/>

}, {
  path: "/favourites",
  element: <Favourites/>
}
])

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


