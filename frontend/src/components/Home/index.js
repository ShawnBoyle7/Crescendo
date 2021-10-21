import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArtistDiv from '../ArtistDiv';
import './Home.css'

const Home = () => {

    const songsSlice = useSelector(state => state.songs)
    const songsByPopularity = Object.values(songsSlice).sort((a, b) => {
        return b.Users.length - a.Users.length
    });

    const artistsSlice = useSelector(state => state.artists)
    const artistsByPopularity = Object.values(artistsSlice).sort((a, b) => {
        return b.Users.length - a.Users.length
    });

    return (
        <div className="home-page">
            <h1 className="welcome-message">Welcome!</h1>

            <div className="artists-section">
                <h1 className="popular-artists">Popular Artists</h1>
                <div className="artists-divs">
                    {artistsByPopularity.map(artist =>
                            <ArtistDiv artist={artist}/>)}
                </div>
                <div className="all-artists">
                    <Link to="/artists">Browse All Artists</Link>
                </div>
            </div>

            <div className="songs-section">
                <h1 className="popular-songs">Popular Songs</h1>
                <div className="songs-divs">
                    {songsByPopularity.map(song =>
                        <div className="songs-item" key={song.id}>
                            <Link to={`/songs/${song.id}`}>
                                {console.log(song)}
                                <img className="songs-image" src={song.Album.imgUrl} alt="Song" />
                                <div className="songs-name">{song.name}</div>
                            </Link></div>)}
                </div>
                <div className="all-songs">
                    <Link to="/songs">Browse All Songs</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;