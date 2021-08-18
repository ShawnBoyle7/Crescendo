import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, Route } from "react-router-dom";
import GenreArtists from "../GenreArtists";
import GenreSongs from "../GenreSongs";

const Genre = ({ genres }) => {
  const { genreId } = useParams()
  const genre = genres.find(genre => genre.id === +genreId)

  const songsSlice = useSelector(state => state.songs)
  const songs = Object.values(songsSlice)

  const genreSongs = songs.filter(song => song.Genre.id === +genreId)
  console.log(genreSongs)

  const artistsSlice = useSelector(state => state.artists)
  const artists = Object.values(artistsSlice)

  const genreArtists = artists.filter(artist => artist.Genre.id === +genreId)
  console.log(genreArtists)
  
  return(
    <>
      <h1>{genre && genre.name}</h1>
      <h1>Artists</h1>
      <Link to={`/genres/${genreId}/artists`}>{genre && genre.name} Artists</Link>
      <Route exact path="/genres/:genreId/artists">
        <GenreArtists propArtists={genreArtists}/>
      </Route>

      <h1>Songs</h1>
      <Link to={`/genres/${genreId}/songs`}>{genre && genre.name} Songs</Link>
      <Route exact path="/genres/:genreId/songs">
        <GenreSongs propSongs={genreSongs}/>
      </Route>
    </>
  )
}

export default Genre;