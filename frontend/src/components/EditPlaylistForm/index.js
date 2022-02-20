import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editPlaylist, getPlaylists } from "../../store/playlists";
import { useSelector} from "react-redux";
import "./EditPlaylistForm.css"

const EditPlaylistForm = ({ setShowEditModal, playlistId }) => {
  const dispatch = useDispatch();
  
  const playlists = Object.values(useSelector(state => state.playlists))
  const playlist = playlists.find(playlist => playlist?.id === +playlistId)
  
  const [playlistName, setPlaylistName] = useState(playlist?.name);
  const [playlistDescription, setPlaylistDescription] = useState(playlist?.description);
  const [validationErrors, setValidationErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false)

  useEffect(() => {
    const errors = []

    if (!playlistName.length) errors.push("Your playlist must have a playlistName!")
    if (playlistName.length > 40) errors.push("Your playlist playlistName must be 40 character or less.")

    setValidationErrors(errors)
  }, [playlistName])

  const submitHandler = async (e) => {
    e.preventDefault()

    if (validationErrors.length) {
      setShowErrors(true)
    }

    const updatedPlaylist = await dispatch(editPlaylist(playlistName, playlistDescription, playlistId))
    if (updatedPlaylist) {
      await dispatch(getPlaylists())
    }
    setShowEditModal(false)
  }

  return (
    <form className="edit-playlist-form" onSubmit={submitHandler}>
      {showErrors && 
        <div className="errors-div">
          <ul className="errors">
            {validationErrors?.length > 0 ? 
              validationErrors?.map((error, idx) => 
                <li key={idx}>{error}</li>) 
            : <></>}
          </ul>
        </div>
      }

      <div className="edit-playlist-header-div">
        <h1 className="edit-playlist-header">Edit details</h1>
        <button className="edit-playlist-header-cancel-button" onClick={e => setShowEditModal(false)}>
          &#10005;
        </button>
      </div>

      <div className="edit-playlist-content-div">
        <div className="edit-playlist-content-image-parent-div">
          <div className="edit-playlist-content-image-child-div">
            <img className="edit-playlist-image" src={playlist?.Songs.length && playlist?.Songs[0].Album?.imgUrl ? playlist?.Songs.length && playlist?.Songs[0].Album?.imgUrl : "https://i.imgur.com/pZ6CUjL.png"}/>
          </div>
        </div>
        <div className="edit-playlist-input-parent-div">
        <input
          className="edit-playlist-input"
          type="text"
          name="playlistName"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.currentTarget.value)}
          placeholder="Name"
          maxLength = {20}
        />
        </div>
        <div className="edit-playlist-description-div">
          <textarea 
            className="edit-playlist-description-textarea" 
            placeholder="Add an optional description"
            value={playlistDescription}
            onChange={(e) => setPlaylistDescription(e.currentTarget.value)}
            maxLength = {80}
          />
        </div>
        <button className="edit-playlist-button">
          Save
        </button>
        <p className="disclaimer">By proceeding, you agree to give Crescendo access to the image you choose to upload. Please make sure you have the right to upload the image.</p>
      </div>

    </form>
  )
}


export default EditPlaylistForm;