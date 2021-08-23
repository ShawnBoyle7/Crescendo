import AudioPlayer from 'react-h5-audio-player';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addPlaylistSong } from '../../store/playlists';
import './Song.css'
import { useState } from 'react';

const Song = ({ songs }) => {
  const history = useHistory()
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


  return(
    <>
      <div className="song-header">
        <h2>{song && song.name}</h2>
      </div>

      <div className="genre-header">
        <h2>{song && song.Genre.name}</h2>
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
      </> }

      <div className="player-div">
        <AudioPlayer
        src="https://cf-media.sndcdn.com/YGm1t3FIDVZ2.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vWUdtMXQzRklEVloyLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjI5NzEyMDMzfX19XX0_&Signature=VmjgO2U3Lpg00NjSgvTVV0pHw8pZpYjvcW7~sZUJjP-AxskZxH92zYuXu84LxHI9s~KsR8s7PYrKLF33Ct5rboO~71dfWNWTlE33OHzIk3iSOa3-uX42nnQwjiGgbwg8aAXgvVlyK3LXyAOzoLUMZ~15f9HMXbXyHb0xd-x1mUDcDuwxdxSipmP8SUN8Ba4jNTPQEE6el6MaMSXuQvkBqLsbx-riWyknptYPkyCxKMZK1H9vdaC3f8z-4J58ZsBavjNIZOBlzZi7b7LuxRNaCY~2TPFlRSsXS7NxW8QzUbBdxytBL1Mmr~jDVBnoa4uC7YX4ZLingGRFQxKBZHl2ew__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"
        onPlay={e => console.log("onPlay")}
        />
      </div>
    </>
  )
}

export default Song;