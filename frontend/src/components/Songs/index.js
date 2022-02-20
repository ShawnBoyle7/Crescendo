import { Route } from "react-router-dom"
import { useSelector } from "react-redux"
import Song from '../Song'
import SongDiv from "../SongDiv"
import './Songs.css'

const Songs = () => {
  const songsSlice = useSelector(state => state.songs);
  const songs = Object.values(songsSlice);

  return (
    <>
      <Route exact path="/songs">
        <div className="song-section">
          <div className="songs-divs">
            {songs.map(song =>
              <SongDiv song={song}/>)}
          </div>
        </div>
      </Route>

      <Route path="/songs/:songId">
        <Song songs={songs} />
      </Route>
    </>
  )
}

export default Songs;