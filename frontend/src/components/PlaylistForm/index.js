import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist } from "../../store/playlists";

const PlaylistForm = () => {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const [name, setName] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false)
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
      userId: sessionUser.id
    }

    // 1.
    const createdPlaylist = await dispatch(createPlaylist(formValues))
      if (createdPlaylist) {
        console.log(formValues)
        history.push('/playlists')
    }
  }
  
  return(
    <form className="playlist-form" onSubmit={submitHandler}>  
      <h2>Create your Playlist!</h2>
      {showErrors && <ul className="errors">
        {validationErrors.length > 0 ? validationErrors.map(error => <li key={number++}>{error}</li>) : <></>}
      </ul>}
  
      <div>
        <label htmlFor="name"> Name </label>
          <input
            id="name"
            type="text"
            onBlur={() => setShowErrors(true)}
            onChange={e => setName(e.target.value)}
            value={name}/>
        </div>
        <button
          disabled={validationErrors.length > 0}>
          Create Playlist
        </button>
    </form>
  )
}


export default PlaylistForm;