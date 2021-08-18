import { Link, Route } from "react-router-dom";

const GenreSongs = ({ propSongs }) => {
  return(
    <>
      <ul>
      {propSongs && propSongs.map(genreSong => <li key={genreSong.id}><Link to={`/artists/${genreSong.artistId}/${genreSong.id}`}>{genreSong.name}</Link></li>)}
      </ul>
      <Route path="/artists/:artistId/:songId">
        songs go here?
      </Route>
    </>
  )
}

export default GenreSongs;