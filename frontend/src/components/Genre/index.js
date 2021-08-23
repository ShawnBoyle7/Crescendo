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
      <div className="genre-name">
        <h1>{genre && genre.name}</h1>
      </div>
      <div className="artists-songs-section">
        <div className="artists-filter">
          <Link to={`/genres/${genreId}/artists`}>
          <div className="artist-header">
            <h2>{genre && genre.name} Artists </h2>
          </div>
          </Link> 
        </div>
        <div className="songs-filter">
          <Link to={`/genres/${genreId}/songs`}>
          <div className="song-header">
            <h2>{genre && genre.name} Songs </h2>
          </div>
          </Link>
        </div>

      <div className="genre-artists-component">
        <Route exact path="/genres/:genreId/artists">
          <GenreArtists propArtists={genreArtists}/>
        </Route>
      </div>

      <div className="genre-songs-component">
        <Route exact path="/genres/:genreId/songs">
          <GenreSongs propSongs={genreSongs}/>
        </Route>
      </div>
    </div>

    </>
  )
}

export default Genre;