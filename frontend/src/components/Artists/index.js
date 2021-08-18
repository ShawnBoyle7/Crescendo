import { Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Artist from '../Artist';

const Artists = () => {
  const artistsSlice = useSelector(state => state.artists);
  const artists = Object.values(artistsSlice);

  return(
    <>
      <Route exact path="/artists">
        <h1>This is the artists component</h1> 
        <ul>
          {artists.map(artist => <li key={artist.id}> <Link to={`/artists/${artist.id}`}> {artist.name} {artist.Genre.name} {} </Link></li>)}
        </ul>
      </Route>

      <Route path="/artists/:artistId">
        <Artist artists={artists}/>
      </Route>
    </>
  )
}

export default Artists;