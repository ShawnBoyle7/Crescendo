import { useHistory, useParams, Link } from "react-router-dom";
import EditPlaylistForm from "../EditPlaylistForm";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../store/playlists";
import { useState } from "react";

const Playlist = ({ playlists }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { playlistId } = useParams();
    const playlist = playlists.find(playlist => playlist.id === +playlistId)
    const songs = playlist.Songs

    const [showEditForm, setShowEditForm] = useState(false)
    const [showDeleteForm, setShowDeleteForm] = useState(false)


    const deletePlaylistFunction = () => {
        dispatch(deletePlaylist(playlist.id))
        history.push('/library/playlists')
        setShowEditForm(false)
        setShowDeleteForm(false)
    }

    return (
        <>
            <h1>{playlist && playlist.name}</h1>
            <div>
                {songs && songs.map(song =>
                    <Link to={`/songs/${song.id}`} key={song.id}>
                        <div className="song-name">{song.name}</div>
                    </Link>)}
            </div>

            <button onClick={() => setShowEditForm(true)}>Edit Playlist Name</button>
            <button onClick={() => setShowDeleteForm(true)}>Delete Playlist</button>

            {showEditForm &&
                <EditPlaylistForm setShowEditForm={setShowEditForm} />}

            {showDeleteForm &&
                <>
                    <button type="button" onClick={deletePlaylistFunction}>
                        Confirm Delete
                    </button>
                    <button onClick={e => setShowDeleteForm(false)}>Cancel Delete</button>
                </>}
        </>
    )
}

export default Playlist;