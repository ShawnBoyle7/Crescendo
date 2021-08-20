import { useParams } from "react-router-dom";
import EditPlaylistForm from "../EditPlaylistForm";

const Playlist = ({ playlists }) => {
  const { playlistId } = useParams();
  const playlist = playlists.find(playlist => playlist.id === +playlistId)
  console.log(playlist)

  return(
    <>
      <h1>{playlist && playlist.name}</h1>
      <EditPlaylistForm/>
    </>
  )
}

export default Playlist;