import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
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

  

  return(
    <div className="home-page">
      {/* <h1 className="welcome-message">Welcome!</h1> */}

      <div className="artists-section">
      <div className="artist-divs">
      <h1 className="popular-artists">Popular Artists</h1>
        {artistsByPopularity.map(artist => <div className="artist-item" key={artist.id}> <Link to={`/artists/${artist.id}`}><div className="artist-name">{artist.name}</div> <img className="artists-image" src={artist.artistImgUrl} alt="Artist"/> </Link></div>)}
      </div>
      <Link to="/artists"><div className="all-artists">Browse All Artists</div></Link>
      </div>

      <div className="songs-section">
      <div className="song-divs">
        <h1 className="popular-songs">Popular Songs</h1>
          {songsByPopularity.map(song => <div className="song-item" key={song.id}> <Link to={`/songs/${song.id}`}> <div className="song-name">{song.name}</div> <img className="songs-image" src={song.songImgUrl} alt="Song"/> </Link></div>)}
      </div>
        <Link to="/songs"><div className="all-songs">Browse All Songs</div></Link>
      </div>
    </div>
  )
}

export default Home;