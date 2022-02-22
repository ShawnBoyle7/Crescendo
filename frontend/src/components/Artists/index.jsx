import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArtistDiv from '../ArtistDiv';
import './Artists.css';

function Artists() {
  const artistsSlice = useSelector((state) => state.artists);
  const artists = Object.values(artistsSlice);

  return (
    <Route exact path="/artists">
      <div className="library-header-div">
        <h1 className="library-header">Artists</h1>
      </div>
      <div className="library-section">
        {artists && artists?.map((artist) => <ArtistDiv artist={artist} key={artist.id} />)}
      </div>
    </Route>
  );
}

export default Artists;
