import React from 'react';
import { Link } from 'react-router-dom';
import './AlbumDiv.css';

function AlbumDiv({ album }) {
  return (
    <Link to={`/albums/${album?.id}`}>
      <div className="album-card" key={album?.id}>
        <img className="album-image" src={album?.imgUrl} alt="album-art" />
        <span className="album-name">{album?.name}</span>
        <span className="album-artist">{album?.Artist?.name}</span>
      </div>
    </Link>
  );
}

export default AlbumDiv;
