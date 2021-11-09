import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import Playlist from "../Playlist";

const Playlists = () => {
    const sessionUser = useSelector(state => state.session.user)
    const playlistsSlice = useSelector(state => state.playlists);
    const allPlaylists = Object.values(playlistsSlice);
    const userPlaylists = allPlaylists.filter(playlist => playlist.userId === +sessionUser.id)
    // console.log(userPlaylists)
    return (
        <>
            <Route exact path="/playlists">
                <div>
                    {userPlaylists.map(playlist => <Link key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link>)}
                </div>
            </Route>

        </>

    )
}

export default Playlists;