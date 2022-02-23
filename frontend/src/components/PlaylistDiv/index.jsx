import React from 'react';
import { Link } from 'react-router-dom';
import './PlaylistDiv.css';

function PlaylistDiv({ playlist, sessionUser }) {
  const songs = playlist?.Songs;
  let song;
  if (songs?.length) {
    song = songs[0];
  }

  return (
    <Link to={`/playlists/${playlist?.id}`}>
      <div className="playlist-card" key={playlist?.id}>
        <img className="playlist-image" src={song?.Album?.imgUrl ? song?.Album?.imgUrl : 'https://i.imgur.com/wkc2qJn.png'} alt="" />
        <span className="playlist-name">{playlist?.name}</span>
        <span className="playlist-creator">
          By
          {' '}
          {sessionUser?.username}
        </span>
      </div>
    </Link>
  );
}

export default PlaylistDiv;
