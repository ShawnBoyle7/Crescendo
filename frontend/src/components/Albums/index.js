import { Link } from 'react-router-dom';

const Albums = ({ albums }) => {
  return(
    <>
      <h1>This is the albums component</h1> 
      <ul>
        {albums && albums.map(album => <li key={album.id}> <Link to={`/albums/${album.id}`}> {album.name} </Link></li>)}
      </ul>
    </>
  )
}

export default Albums;