import { Link } from "react-router-dom";

const GenreArtists = ({ propArtists }) => {
  return(
    <>
      <ul>
      {propArtists && propArtists.map(genreArtist => <li key={genreArtist.id}><Link to={`/artists/${genreArtist.artistId}`}>{genreArtist.name}</Link></li>)}
      </ul>
    </>
  )
}

export default GenreArtists;