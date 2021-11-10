import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editPlaylist, getPlaylists } from "../../store/playlists";

const EditPlaylistForm = ({ setShowEditModal, playlistId }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false)

    let number = 0;

    useEffect(() => {
        const errors = []

        if (!name.length) errors.push("Your playlist must have a name!")
        if (name.length > 40) errors.push("Your playlist name must be 40 character or less.")

        setValidationErrors(errors)
    }, [name])

    const submitHandler = async (e) => {
        e.preventDefault()

        const updatedPlaylist = await dispatch(editPlaylist(name, playlistId))
        if (updatedPlaylist) {
            await dispatch(getPlaylists())
        }
        setShowEditModal(false)
    }

    return (
        <form className="playlist-form" onSubmit={submitHandler}>
            <h2>Update your Playlist name!</h2>
            {showErrors && <ul className="errors">
                {validationErrors.length > 0 ? validationErrors.map(error => <li key={number++}>{error}</li>) : <></>}
            </ul>}

            <div>
                <input
                    type="text"
                    name="name"
                    onBlur={() => setShowErrors(true)}
                    onChange={e => setName(e.target.value)}
                    value={name} />
            </div>
            <button type="submit">
                Update Playlist
            </button>
            <button onClick={e => setShowEditModal(false)}>Cancel Edit</button>
        </form>
    )
}


export default EditPlaylistForm;