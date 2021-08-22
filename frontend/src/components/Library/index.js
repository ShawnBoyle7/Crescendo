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
    
      <div className="artists-section">
        <div className="artists-divs">
          {followedArtists ? followedArtists.map(artist =>
            <div className="artists-item" key={artist.id}>
            <Link to={`/artists/${artist.id}`}>
            <img className="artists-image" alt={"artist"} src={artist.artistImgUrl}/>
            <div className="artists-name">{artist.name}</div>  
            </Link>
            </div>) 
            : <></>}
        </div>
      </div>

      <div className="albums-section">
        <div className="albums-divs">
          {likedAlbums ? likedAlbums.map(album =>
            <div className="albums-item" key={album.id}>
            <Link to={`/albums/${album.id}`}>
            <img className="albums-image" alt={"album"} src={album.albumImgUrl}/>
            <div className="albums-name">{album.name}</div>  
            </Link>
            </div>) 
            : <></>}
        </div>
      </div>

      <div className="playlists-section">
        <div className="playlists-divs">
          {userPlaylists ? userPlaylists.map(playlist =>
            <div className="playlists-item" key={playlist.id}>
            <Link to={`/playlists/${playlist.id}`}>
            <div className="playlists-name">{playlist.name}</div>  
            </Link>
            </div>)
        : <></>}
        </div>
      </div>

    </>
  )
}

export default Library;