import React from 'react';
import { Link } from 'react-router-dom';
import './GenreArtists.css';

function GenreArtists({ propArtists }) {
  return (
    <div className="artist-section">
      <div className="artist-divs">
        {propArtists.map((artist) => (
          <div className="artists-item" key={artist.id}>
            <Link to={`/artists/${artist.id}`}>
              <img className="artists-image" alt="artist" src={artist.artistImgUrl} />
              <div className="artists-name">{artist.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenreArtists;
