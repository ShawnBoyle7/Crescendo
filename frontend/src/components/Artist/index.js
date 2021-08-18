import { useParams } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import Albums from "../Albums";

const Artist = ({ artists }) => {

  const { artistId } = useParams()
  const artist = artists.find(artist => artist.id === +artistId)
  return(
    <>
      <h1>{artist && artist.name} {artist && artist.Genre.name}</h1>
      <Route exact path="/artists/:artistId">

      <ul>
        {/* This map will create a link for each album from my artist. I'll use this to render a select few on the artist's page. */}
        {artist && artist.Albums.map(artistAlbum => <li key={artistAlbum.artistId}> 
        <Link to={`/albums/${artistAlbum.id}`}> {artistAlbum.name} </Link> </li>)}
      </ul>

      {/* This link below will render all the albums of my artist. I'll use this for a directory of all my artist's albums. */}
      <Link to={`/artists/${artistId}/albums`}> See All Albums </Link>
      </Route>

      <Route path="/artists/:artistId/albums">
        <Albums albums={artist && artist.Albums}/>
      </Route>
    </>
  )
}

export default Artist;