import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ArtistDiv from "../ArtistDiv"
import AlbumDiv from "../AlbumDiv"
import PlaylistDiv from "../PlaylistDiv";
import SongDiv from "../SongDiv";
import './Library.css'

const Library = () => {
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.users[sessionUser.id]);

  const playlistsSlice = useSelector(state => state.playlists);
  const allPlaylists = Object.values(playlistsSlice);

  const userPlaylists = allPlaylists?.filter(playlist => playlist?.userId === +user?.id);
  const followedArtists = user?.Artists;
  const likedAlbums = user?.Albums;
  const likedSongs = user?.Songs;

  return (
    <>
      <div className="library-page">
        <Switch>
          <Route path="/library/playlists">
            <div className="library-header-div">
              <h1 className="library-header">Playlists</h1>
            </div>
            <div className="library-section">
              {userPlaylists && userPlaylists?.map(playlist =>
                <PlaylistDiv playlist={playlist} sessionUser={sessionUser}/>)}
            </div>
          </Route>

          <Route path="/library/artists">
            <div className="library-header-div">
              <h1 className="library-header">Artists</h1>
            </div>
            <div className="library-section">
              {followedArtists && followedArtists?.map(artist =>
                <ArtistDiv artist={artist}/>)}
            </div>
          </Route>

          <Route path="/library/albums">
            <div className="library-header-div">
              <h1 className="library-header">Albums</h1>
            </div>
            <div className="library-section">
              {likedAlbums && likedAlbums?.map(album =>
                <AlbumDiv album={album}/>)}
            </div>
          </Route>

          {/* <Route path="/library/songs">
            <div className="library-header-div">
              <h1 className="library-header">Albums</h1>
            </div>
            <div className="library-section">
              {likedSongs && likedSongs?.map(song =>
                <SongDiv song={song}/>)}
            </div>
          </Route> */}
        </Switch>
      </div>
    </>
  )
}

export default Library;