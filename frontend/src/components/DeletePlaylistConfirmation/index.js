import React from "react"
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deletePlaylist, getPlaylists } from "../../store/playlists";
import { getUsers } from "../../store/users";


const DeletePlaylistConfirmation = ({ playlistId, setShowDeleteModal }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const playlists = Object.values(useSelector(state => state.playlists))
    const playlist = playlists.find(playlist => playlist?.id === playlistId)

    const handleDelete = () => {
        dispatch(deletePlaylist(playlistId))
        dispatch(getUsers())
        dispatch(getPlaylists())
        setShowDeleteModal(false)
        history.push("/library/playlists")
    }

    return (
    <div>
        <span>Delete{playlist?.name}?</span>
        <span>This action cannot be undone</span>
        <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
        <button onClick={handleDelete}>Delete Playlist</button>
    </div>
    )
}

export default DeletePlaylistConfirmation