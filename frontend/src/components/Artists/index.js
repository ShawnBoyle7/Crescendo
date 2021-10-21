import { Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Artist from '../Artist';
import './Artists.css'

const Artists = () => {
  const artistsSlice = useSelector(state => state.artists);
  const artists = Object.values(artistsSlice);

  return (
    <>
      <Route exact path="/artists">
        <div className="artist-section">
          <div className="artist-divs">
            {artists.map(artist =>
              <div className="artists-item" key={artist.id}>
                <Link to={`/artists/${artist.id}`}>
                  <img className="artists-image" alt={"artist"} src={artist.imgUrl} />
                  <div className="artists-name">{artist.name}</div>
                </Link>
              </div>)}
          </div>
        </div>
      </Route>

      <Route path="/artists/:artistId">
        <Artist artists={artists} />
      </Route>
    </>
  )
}

export default Artists;