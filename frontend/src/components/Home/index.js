import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArtistDiv from '../ArtistDiv';
import AlbumDiv from '../AlbumDiv';
import Splash from '../Splash';
import './Home.css'

const Home = () => {
  const sessionUser = useSelector(state => state.session.user)
  const sessionUsername = useSelector(state => state.session?.user?.username)

  const albumsSlice = Object.values(useSelector(state => state.albums))
  let albumsByPopularity = albumsSlice.sort((a, b) => {
    return b.Users.length - a.Users.length
  });

  const artistsSlice = Object.values(useSelector(state => state.artists))
  let artistsByPopularity = artistsSlice.sort((a, b) => {
    return b.Users.length - a.Users.length
  });
  
  if (artistsByPopularity.length > 5) artistsByPopularity = artistsByPopularity.slice(0, 5)
  if (albumsByPopularity.length > 5) albumsByPopularity = albumsByPopularity.slice(0, 5)
  
  return (
    // sessionUser ? 
      <>
        <div className="home-page">
          <h2 className="welcome-message">Welcome, {sessionUsername}</h2>

          <div className="artists-section">
            <h2 className="popular-header">Popular Artists</h2>
            <div className="artists-div">
              {artistsByPopularity.map(artist =>
                <ArtistDiv key={artist.id} artist={artist}/>)}
            </div>
            <Link className="gallery-link" to="/artists">
              Browse All Artists
            </Link>
          </div>

          <div className="albums-section">
            <h2 className="popular-header">Popular Albums</h2>
            <div className="albums-div">
              {albumsByPopularity.map(album =>
                <AlbumDiv key={album.id} album={album}/>)}
            </div>
            <Link className="gallery-link" to="/albums">
              Browse All Albums
            </Link>
          </div>
        </div>
      </>
    // :
    //   <>
    //     <Splash/>
    //   </>
  )
}

export default Home;