import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AlbumDiv from '../AlbumDiv';
import './Albums.css';

const Albums = () => {
    const albumsSlice = useSelector(state => state.albums);
    const albums = Object.values(albumsSlice);

    return (
        <>
            <Route exact path="/albums">
                <div className="library-header-div">
                    <h1 className="library-header">Albums</h1>
                </div>
                <div className="library-section">
                    {albums && albums?.map(album =>
                        <AlbumDiv album={album} />)}
                </div>
            </Route>
        </>
    )
}

export default Albums;