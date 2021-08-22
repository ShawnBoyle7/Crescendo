import { Link, Route } from 'react-router-dom';
import './Albums.css';
// import Album from '../Album';

const Albums = ({ albums }) => {
  return(
    <>
      <Route exact path="/artists/:artistId/albums">
        <div className="albums-section">
            <div className="albums-divs">
              {albums.map(album =>
                <div className="albums-item" key={album.id}>
                <Link to={`/albums/${album.id}`}>
                <img className="albums-image" alt={"album"} src={album.albumImgUrl}/>
                <div className="albums-name">{album.name}</div>  
                </Link>
                </div>)}
            </div>
          </div> 
      </Route>

    </>
  )
}

export default Albums;