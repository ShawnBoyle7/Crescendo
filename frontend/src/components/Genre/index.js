import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, Route } from "react-router-dom";
import GenreArtists from "../GenreArtists";
import GenreSongs from "../GenreSongs";
import './Genre.css'

const Genre = ({ genres }) => {
  const { genreId } = useParams()
  const genre = genres.find(genre => genre.id === +genreId)

  const songsSlice = useSelector(state => state.songs)
  const songs = Object.values(songsSlice)

  const genreSongs = songs.filter(song => song.Genre.id === +genreId)

  const artistsSlice = useSelector(state => state.artists)
  const artists = Object.values(artistsSlice)

  const genreArtists = artists.filter(artist => artist.Genre.id === +genreId)
  
  return(
    <>
      <h1>{genre && genre.name}</h1>
      <div className="artists-songs-div"> <Link to={`/genres/${genreId}/artists`}><h2>{genre && genre.name} Artists </h2></Link> 
      <Link to={`/genres/${genreId}/songs`}><h2>{genre && genre.name} Songs </h2></Link> </div>

      <Route exact path="/genres/:genreId/artists">
        <GenreArtists propArtists={genreArtists}/>
      </Route>

      <Route exact path="/genres/:genreId/songs">
        <GenreSongs propSongs={genreSongs}/>
      </Route>
    </>
  )
}

export default Genre;