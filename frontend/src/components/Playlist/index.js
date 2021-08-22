import { useHistory, useParams, Link } from "react-router-dom";
import EditPlaylistForm from "../EditPlaylistForm";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../store/playlists";

const Playlist = ({ playlists }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { playlistId } = useParams();
  const playlist = playlists.find(playlist => playlist.id === +playlistId)
  const songs = playlist.Songs

  const deletePlaylistFunction = () => {
    dispatch(deletePlaylist(playlist.id))
    history.push('/playlists')
  }

  return(
    <>
      <h1>{playlist && playlist.name}</h1>
      <div>
        {songs.map(song =>
          <Link to= {`/songs/${song.id}`} key={song.id}>
          <div className="song-name">{song.name}</div>
          </Link>)}
      </div>

      <EditPlaylistForm/>
      <button type="button" onClick={deletePlaylistFunction}>
        Delete Playlist
      </button>
    </>
  )
}

export default Playlist;