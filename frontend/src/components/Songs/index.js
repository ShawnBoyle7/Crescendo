import { Link, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import Song from '../Song'
import './Songs.css'

const Songs = () => {
  const songsSlice = useSelector(state => state.songs);
  const songs = Object.values(songsSlice);

  return(
    <>
      <Route exact path="/songs">
        <h1>This is the songs component</h1>
        <ul>
          {songs.map(song => <li key={song.id}> <Link to={`/songs/${song.id}`}> {song.name} {song.Genre.name}</Link></li>)}
        </ul>
      </Route>

      <Route path="/songs/:songId">
        <Song songs={songs}/>
      </Route>
    </>
  )
}

export default Songs;