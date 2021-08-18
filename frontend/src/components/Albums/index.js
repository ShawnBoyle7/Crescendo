import { Link, Route } from 'react-router-dom';
// import Album from '../Album';

const Albums = ({ albums }) => {
  return(
    <>
      <Route exact path="/artists/:artistId/albums">
      <h1>This is the albums component</h1> 
      <ul>
        {albums && albums.map(album => <li key={album.id}> <Link to={`/albums/${album.id}`}> {album.name} </Link></li>)}
      </ul>
      </Route>

      {/* <Route path="/albums/:albumId">
        <Album albums={albums}/>
      </Route> */}
    </>
  )
}

export default Albums;