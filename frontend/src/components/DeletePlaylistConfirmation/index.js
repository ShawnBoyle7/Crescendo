import React from "react"
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deletePlaylist, getPlaylists } from "../../store/playlists";
import { getUsers } from "../../store/users";
import "./DeletePlaylistConfirmation.css"

const DeletePlaylistConfirmation = ({ playlistId, setShowDeleteModal }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  
  const playlists = Object.values(useSelector(state => state.playlists))
  const playlist = playlists.find(playlist => playlist?.id === +playlistId)

  const handleDelete = async () => {
    await dispatch(deletePlaylist(+playlistId))
    dispatch(getUsers())
    setShowDeleteModal(false)
    history.push("/library/playlists")
  }
  
  return (
    <>
      <h2>Delete {playlist?.name}?</h2>
      <p>This action cannot be undone</p>
      <div className="delete-playlist-buttons-div">
        <button className="delete-playlist-cancel-button" onClick={() => setShowDeleteModal(false)}>Cancel</button>
        <button className="delete-playlist-delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </>
  )
}

export default DeletePlaylistConfirmation