import { useHistory, useParams } from "react-router-dom";
import EditPlaylistForm from "../EditPlaylistForm";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../store/playlists";

const Playlist = ({ playlists }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { playlistId } = useParams();
  const playlist = playlists.find(playlist => playlist.id === +playlistId)

  const deletePlaylistFunction = () => {
    dispatch(deletePlaylist(playlist.id))
    history.push('/playlists')
  }

  return(
    <>
      <h1>{playlist && playlist.name}</h1>
      <EditPlaylistForm/>
      <button type="button" onClick={deletePlaylistFunction}>
        Delete Playlist
      </button>
    </>
  )
}

export default Playlist;