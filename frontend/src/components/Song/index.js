import AudioPlayer from 'react-h5-audio-player';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addPlaylistSong } from '../../store/playlists';
import './Song.css'
import { useState } from 'react';

const Song = ({ songs }) => {
  const dispatch = useDispatch()

  const { songId } = useParams()
  const song = songs.find(song => song.id === +songId)

  const [playlistId, setPlaylistId] = useState("")
  const [showForm, setShowForm] = useState(false)

  const sessionUser = useSelector(state => state.session.user)

  const playlistsSlice = useSelector(state => state.playlists)
  const playlists = Object.values(playlistsSlice)
  const userPlaylists = playlists?.filter(playlist => playlist.userId === +sessionUser?.id)
  const playlistsWithoutSong = userPlaylists?.filter(playlist => {
    let canAdd = true;

    playlist?.Songs.forEach(song => {
      if (song?.id === +songId) {
        canAdd = false;
      };
    });

    return canAdd;
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      songId: song.id,
      playlistId: playlistId
    }

    dispatch(addPlaylistSong(payload))
    setShowForm(false)
  }


  return (
    <>
      <div className="song-header">
        <h2>{song && song.name}</h2>
      </div>

      <div className="album-header">
        <h2>{song && song.Album.name}</h2>
      </div>

      <button type="button" onClick={e => setShowForm(true)}>
        Add To Playlist
      </button>


      {showForm &&
        <>
          <form className="add-to-playlist-form" onSubmit={handleSubmit}>
            <select required value={playlistId} onChange={e => setPlaylistId(e.target.value)}>
              <option value="">Add to Playlist</option>
              {playlistsWithoutSong.map(playlist =>
                <option key={playlist.id} value={playlist.id}>{playlist.name}</option>)}
            </select>
            <button>Submit</button>
          </form>
          <button onClick={e => setShowForm(false)}>Cancel</button>
        </>}

      <div className="player-div">
        <AudioPlayer
          src={song.songUrl}
          onPlay={e => console.log("onPlay")}
        />
      </div>
    </>
  )
}

export default Song;