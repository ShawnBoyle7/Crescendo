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

    playlist.Songs.forEach(song => {
      if (song.id === +songId) {
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
        src="https://cf-media.sndcdn.com/YGm1t3FIDVZ2.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vWUdtMXQzRklEVloyLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjI5Mzk0MjY5fX19XX0_&Signature=TcuDtP2~1tE2Q27Kmnf5kPUJF4c~whXmESnosblLhwp23Srbql1~s~OCbXFj1ajApaohAAw9lB~lNDHwKkVet3Jpl1rN3NSGfCcdfOZ7H08LpGrbm-Tk3bdl4jY4S8TEpR9w~lfjjLOulY22KwQCigxWDZDAihhlh6GvkO3IBohYhgHPFe5SkgRoWAtk7OUM22gc2uguHf5dYE74Wy7Wu1xiMkHhAUoBdylPZ36F--C753yhDpmXNmJGP0rfI~rehXcA-GfXDb2LoruaDJxfQIO9CtCePirHb4lXOW6VPUmi37Pm7gGCTtASRHloVmiXmrINeTNC8ZZjdDp6n1~E6Q__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"
        onPlay={e => console.log("onPlay")}
        />
      </div>
    </>
  )
}

export default Song;