// import { useState, useEffect } from "react"
// import { Card } from "../components/Card/Card"
// import { useStore } from "../services/store"
// import { fetchPodcasts } from "../services/api"
// import { Navbar } from "../components/Navbar/Navbar";

// export const Podcasts = () => {

//     const [allShows, setAllShows] = useState([])
//     const [error, setError] = useState(null)
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const data = await fetchPodcasts();
//           setAllShows(data);
//           } catch (error) {
//             setError(error)
//         }
//       }
//       fetchData();
//     }, [])

//     console.log(allShows)

//     return (
//         <div>
//             {/* <button onClick={toggleNightMode}>Toggle Mode</button> */}
//             {allShows.map(show => (
//       <Card key={show.id} image={show.image} title={show.title} seasons={show.seasons} />
//       ))}
//         </div>
//     )
// , []}