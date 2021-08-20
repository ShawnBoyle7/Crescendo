import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Library = () => {
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.users[sessionUser.id]);

  const playlistsSlice = useSelector(state => state.playlists);
  const allPlaylists = Object.values(playlistsSlice);

  const userPlaylists = allPlaylists.filter(playlist => playlist.userId === +user.id);
  const followedArtists = user?.Artists;
  const likedAlbums = user?.Albums

  return(
    <>
      <div className="playlists-div">
      {userPlaylists ? userPlaylists.map(playlist => <div className="playlist-links" key={playlist.id}><Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link></div>) : <></>}
      </div>

      <div className="artists-div">
      {followedArtists ? followedArtists.map(artist => <div className="artist-links" key={artist.id}><Link to={`/artists/${artist.id}`}>{artist.name}</Link></div>) : <></>}

      </div>
      <div className="albums-div">
      {likedAlbums ? likedAlbums.map(album => <div className="album-links" key={album.id}><Link to={`/albums/${album.id}`}>{album.name}</Link></div>) : <></>}
      </div>
    </>
  )
}

export default Library;