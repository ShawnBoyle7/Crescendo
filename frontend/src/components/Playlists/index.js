import { useSelector } from "react-redux";

const Playlists = () => {
  const sessionUser = useSelector(state => state.session.user)
  const playlistsSlice = useSelector(state => state.playlists);
  const allPlaylists = Object.values(playlistsSlice);
  const userPlaylists = allPlaylists.filter(playlist => playlist.userId === +sessionUser.id)
  console.log(userPlaylists)
  return(
    <>
      
    </>
  )
}

export default Playlists;