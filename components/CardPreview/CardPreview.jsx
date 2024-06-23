import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchShow } from "../../services/api";
import './CardPreview.css';
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

export const CardPreview = () => {
  const [podcast, setPodcast] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShow(id);
        setPodcast(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [id]);

  // Function to check if an episode is favourited
  const isfavourited = (episode) => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    return favourites.some(fav => fav.episode === episode.episode && fav.season === episode.season && fav.podcastId === id);
  };

  // Function to toggle favourite status
  const togglefavourite = (episode) => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const episodeData = {
      podcastId: id,
      season: episode.season,
      episode: episode.episode,
      title: episode.title,
      description: episode.description,
      file: episode.file,
      image: podcast.image // Assuming the podcast image is relevant to the episode
    };

    if (isfavourited(episode)) {
      const newfavourites = favourites.filter(fav => fav.episode !== episode.episode || fav.season !== episode.season || fav.podcastId !== id);
      localStorage.setItem('favourites', JSON.stringify(newfavourites));
    } else {
      favourites.push(episodeData);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }

    setPodcast(prevPodcast => ({
      ...prevPodcast,
      seasons: prevPodcast.seasons.map(season => ({
        ...season,
        episodes: season.episodes.map(ep =>
          ep.episode === episode.episode ? { ...ep, favourited: !isfavourited(episode) } : ep
        )
      }))
    }));
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!podcast) {
    return <div>Loading...</div>;
  }

  return (
    <div className="podcast-detail-container">
      <h1 className="podcast-detail-title">{podcast.title}</h1>
      <p className="podcast-detail-description">{podcast.description}</p>
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
                  {isfavourited(episode) ? (
                    <FaRegBookmark
                      onClick={() => togglefavourite(episode)}
                      className="favourite-icon"
                    />
                  ) : (
                    <FaBookmark
                      onClick={() => togglefavourite(episode)}
                      className="favourite-icon"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};