import React from 'react';
import { Link } from 'react-router-dom';
import './ArtistDiv.css';

function ArtistDiv({ artist }) {
  return (
    <Link to={`/artists/${artist?.id}`}>
      <div className="artist-card" key={artist?.id}>
        <img className="artist-image" src={artist?.imgUrl} alt="artist-art" />
        <span className="artist-name">{artist?.name}</span>
        <span className="artist-text">Artist</span>
      </div>
    </Link>
  );
}

export default ArtistDiv;
