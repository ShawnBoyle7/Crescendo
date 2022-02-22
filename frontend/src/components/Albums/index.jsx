import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AlbumDiv from '../AlbumDiv';
import './Albums.css';

function Albums() {
  const albumsSlice = useSelector((state) => state.albums);
  const albums = Object.values(albumsSlice);

  return (
    <Route exact path="/albums">
      <div className="library-header-div">
        <h1 className="library-header">Albums</h1>
      </div>
      <div className="library-section">
        {albums && albums?.map((album) => <AlbumDiv album={album} key={album.id} />)}
      </div>
    </Route>
  );
}

export default Albums;
