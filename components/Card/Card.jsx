import './Card.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchShow } from '../../services/api'

export const Card = ({image, title, seasons}) => {

    const [podcast, setPodcast] = useState(null)
    const [error, setError] = useState(null) 
    const { id } = useParams()

    useEffect(() => {
        const fetchPodcast = async () => {
            try {
                const data = await fetchShow(id)
                setPodcast(data)
                } catch (error) {
                    setError(error)
                };
        };
        fetchPodcast();
    }, [id])

    if (error) {
        return <div>Loading...</div>;
    }


    return(
        <>
            <h1>{podcast.title}</h1>
            <p>{podcast.description}</p>
            {podcast.seasons.map((season) => (
            <div key={season.season} className="season-container">
            <h2>{season.title}</h2>
            <img src={season.image} alt={`Season ${season.season}`} />
            {season.episodes.map((episode) => (
                <div key={episode.episode} className="card-container">
                <div className="podcast-card">
                    <div className="podcast-info">
                    <h3>{episode.title}</h3>
                    <p>{episode.description}</p>
                    <audio controls src={episode.file}>
                        Your browser does not support the audio element.
                    </audio>
                    </div>
                </div>
                </div>
            ))}
            </div>
            ))}
        </>
    )

}
