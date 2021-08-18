import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
 
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
    <>
      <h1>Popular Artists</h1>
      <ul>
        {artistsByPopularity.map(artist => <li key={artist.id}> <Link to={`/artists/${artist.id}`}> {artist.name} </Link></li>)}
      </ul>

      <Link to="/artists">Browse All Artists</Link>

      <h1>Popular Songs</h1>
      <ul>
        {songsByPopularity.map(song => <li key={song.id}> <Link to={`/songs/${song.id}`}> {song.name} </Link></li>)}
      </ul>

      <Link to="/songs">Browse All Songs</Link>
      
    </>
  )
}

export default Home;