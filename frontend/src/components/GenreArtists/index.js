import { Link } from "react-router-dom";
import './GenreArtists.css'

const GenreArtists = ({ propArtists }) => {
  return(
    <>
        <div className="artists-section">
          <div className="artists-divs">
            {propArtists.map(artist =>
              <div className="artists-item" key={artist.id}>
              <Link to={`/artists/${artist.id}`}>
              <img className="artists-image" alt={"artist"} src={artist.artistImgUrl}/>
              <div className="artists-name">{artist.name}</div>  
              </Link>
              </div>)}
          </div> 
        </div>
    </>
  )
}

export default GenreArtists;