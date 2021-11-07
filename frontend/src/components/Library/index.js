import { useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { ArtistDiv } from "../ArtistDiv"
import { AlbumDiv } from "../AlbumDiv"
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
                <Switch>
                    <Route path="/library/playlists">
                        <div className="playlists-section">
                            {userPlaylists ? userPlaylists.map(playlist =>
                                <div className="playlists-item" key={playlist.id}>
                                    <Link to={`/playlists/${playlist.id}`}>
                                        <img className="playlists-image" alt={"playlist"} src={ playlist.Songs.length ? playlist.Songs[0].Album.imgUrl : "https://i.imgur.com/KKVhCBg.png"}/>
                                        <div className="playlists-name">{playlist.name}</div>
                                    </Link>
                                </div>)
                                : <></>}
                        </div>
                    </Route>

                    <Route path="/library/artists">
                        <div className="artist-section">
                            <div className="artist-section">
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
                            <div className="album-section">
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
                </Switch>
            </div>
        </>
    )
}

export default Library;