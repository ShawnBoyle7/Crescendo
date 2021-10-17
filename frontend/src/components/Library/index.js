import { useSelector } from "react-redux";
import { Link, Route, Switch, NavLink } from "react-router-dom";
import './Library.css'

const Library = () => {
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.users[sessionUser.id]);

  const playlistsSlice = useSelector(state => state.playlists);
  const allPlaylists = Object.values(playlistsSlice);

  const userPlaylists = allPlaylists.filter(playlist => playlist.userId === +user.id);
  const followedArtists = user?.Artists;
  const likedAlbums = user?.Albums

  return (
    <>
      <div className="library-page">

        <div className="library-nav-links">
          <NavLink to="/library/artists">Artists</NavLink>
          <NavLink to="/library/albums">Albums</NavLink>
          <NavLink to="/library/playlists">Playlists</NavLink>
        </div>

        <Switch>
          <Route path="/library/artists">
            <div className="artist-section">
              <div className="artist-divs">
                {followedArtists ? followedArtists.map(artist =>
                  <div className="artists-item" key={artist.id}>
                    <Link to={`/artists/${artist.id}`}>
                      <img className="artists-image" alt={"artist"} src={artist.artistImgUrl} />
                      <div className="artists-name">{artist.name}</div>
                    </Link>
                  </div>)
                  : <></>}
              </div>
            </div>
          </Route>

          <Route path="/library/albums">
            <div className="albums-section">
              <div className="album-divs">
                {likedAlbums ? likedAlbums.map(album =>
                  <div className="albums-item" key={album.id}>
                    <Link to={`/albums/${album.id}`}>
                      <img className="albums-image" alt={"album"} src={album.albumImgUrl} />
                      <div className="albums-name">{album.name}</div>
                    </Link>
                  </div>)
                  : <></>}
              </div>
            </div>
          </Route>

          <Route path="/library/playlists">
            <div className="playlists-divs">
              {/* <div className="playlists-divs"> */}
              {userPlaylists ? userPlaylists.map(playlist =>
                <div className="playlists-item" key={playlist.id}>
                  <Link to={`/playlists/${playlist.id}`}>
                    <img className="playlists-image" alt={"playlist"} src={"https://i.imgur.com/rUCUYPz.png"} />
                    <div className="playlists-name">{playlist.name}</div>
                  </Link>
                </div>)
                : <></>}
              {/* </div> */}
            </div>
          </Route>
          <Route>
            <div className="artist-section">
              <div className="artist-divs">
                {followedArtists ? followedArtists.map(artist =>
                  <div className="artists-item" key={artist.id}>
                    <Link to={`/artists/${artist.id}`}>
                      <img className="artists-image" alt={"artist"} src={artist.artistImgUrl} />
                      <div className="artists-name">{artist.name}</div>
                    </Link>
                  </div>)
                  : <></>}
              </div>
            </div>
          </Route>
        </Switch>

      </div>
    </>
  )
}

export default Library;