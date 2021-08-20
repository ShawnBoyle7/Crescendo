import { useSelector } from "react-redux";

const Library = () => {
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.users[sessionUser.id]);

  const playlistsSlice = useSelector(state => state.playlists);
  const allPlaylists = Object.values(playlistsSlice);

  // Library Data
  const userPlaylists = allPlaylists.filter(playlist => playlist.userId === +user.id);
  const followedArtists = user?.Artists;
  const likedAlbums = user?.Albums

  return(
    <>
      
    </>
  )
}

export default Library;