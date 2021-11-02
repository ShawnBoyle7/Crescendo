import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useNowPlaying } from '../../context/NowPlayingContext';
import { addPlaylistSong } from '../../store/playlists';
import './Song.css'

const Song = ({ songs }) => {
    const dispatch = useDispatch()

    const { nowPlaying, setNowPlaying } = useNowPlaying();

    const { songId } = useParams()
    const song = songs.find(song => song.id === +songId)

    const [playlistId, setPlaylistId] = useState("")
    const [showForm, setShowForm] = useState(false)

    const sessionUser = useSelector(state => state.session.user)

    const playlistsSlice = useSelector(state => state.playlists)
    const playlists = Object.values(playlistsSlice)
    const userPlaylists = playlists?.filter(playlist => playlist.userId === +sessionUser?.id)
    const validPlaylists = userPlaylists?.filter(playlist => {
        let canAdd = true;

        playlist?.Songs.forEach(song => {
            if (song?.id === +songId) {
                canAdd = false;
            };
        });

        return canAdd;
    });

    const addSongToPlaylist = (e) => {
        e.preventDefault()

        const payload = {
            songId: song.id,
            playlistId: playlistId
        }

        dispatch(addPlaylistSong(payload))
        setShowForm(false)
        setPlaylistId("");
    }

    return (
        <>
            <div className="song-header">
                <h2>{song && song.name}</h2>
            </div>

            <div className="song-artist-header">
                <h2>{song && song.Artist.name}</h2>
            </div>

            <div className="album-header">
                <h2>{song && song.Album.name}</h2>
            </div>

            <div className="song-album-image">
                <img src={song && song.Album.imgUrl} alt="song-art" />
            </div>

            { nowPlaying !== song.songUrl 
            ? 
                <button onClick={e=>setNowPlaying(song.songUrl)}>Play</button> 
            : 
                <button onClick={e=>setNowPlaying('')}>Stop Playing</button>}

            <button type="button" onClick={e => setShowForm(true)}>
                Add To Playlist
            </button>

            {showForm &&
                <>
                    <form className="add-to-playlist-form" onSubmit={addSongToPlaylist}>
                        <select required value={playlistId} onChange={e => setPlaylistId(e.target.value)}>
                            <option value="">Add to Playlist</option>
                            {validPlaylists.map(playlist =>
                                <option key={playlist.id} value={playlist.id}>{playlist.name}</option>)}
                        </select>
                        <button>Submit</button>
                    </form>
                    <button onClick={e => setShowForm(false)}>Cancel</button>
                </>}
        </>
    )
}

export default Song;