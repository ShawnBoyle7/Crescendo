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
      <div className="song-section">
          <div className="songs-divs">
           {songs.map(song =>
            <div className="songs-item"key={song.id}>
            <Link to={`/songs/${song.id}`}>
            <img className="songs-image" alt={"song"} src={song.songImgUrl}/>
            <div className="songs-name">{song.name}</div>  
            </Link>
            </div>)}
          </div>
        </div>  
      </Route>

      <Route path="/songs/:songId">
        <Song songs={songs}/>
      </Route>
    </>
  )
}

export default Songs;