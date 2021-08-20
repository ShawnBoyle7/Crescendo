import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editPlaylist } from "../../store/playlists";

const EditPlaylistForm = () => {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const [name, setName] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const history = useHistory();
  let number = 0;
  
  useEffect(() => {
    const errors = []
    
    if (!name.length) errors.push("Your playlist must have a name!")
    if (name.length > 40) errors.push("Your playlist name must be 40 character or less.")
    
    setValidationErrors(errors)
  }, [name])
  
  const submitHandler = async (e) => {
    e.preventDefault()

    const formValues = {
      name,
    }
    
    const userId = sessionUser ? sessionUser.id : undefined;

    // 1.
    const createdPlaylist = await dispatch(editPlaylist(formValues, userId))
      if (createdPlaylist) {
        console.log(formValues)
        history.push('/')
    }
  }
  
  return(
    <form className="playlist-form" onSubmit={submitHandler}>  
      <h2>Update your Playlist name!</h2>
      <ul className="errors">
        {validationErrors.length > 0 ? validationErrors.map(error => <li key={number++}>{error}</li>) : <></>}
      </ul>
  
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>
      <button
        type="submit"
        disabled={validationErrors.length > 0}
      >
        Update Playlist
      </button>
    </form>
  )
}


export default EditPlaylistForm;