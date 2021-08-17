import { Link } from 'react-router-dom';

const Artists = ({ artists }) => {
  return(
    <>
      <h1>This is the artists component</h1> 
      <ul>
        {artists.map(artist => <li key={artist.id}> <Link to={`/artists/${artist.id}`}> {artist.name} </Link></li>)}
      </ul>
    </>
  )
}

export default Artists;