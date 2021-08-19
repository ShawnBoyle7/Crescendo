// const sessionUser = useSelector(state => state.session.user);
// console.log(sessionUser.id)
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const PlaylistForm = () => {

  const [name, setName] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  let number = 0;
  
  const submitHandler = () => {
    const formValues = {
      name,
      sessionUser
      // can't use .id? help
    }

    console.log(formValues)
  
    history.push('/')
  }
  
  useEffect(() => {
    const errors = []
  
    if (!name.length) errors.push("Your playlist must have a name!")
    if (name.length > 40) errors.push("Your playlist name must be 40 character or less.")
  
    setValidationErrors(errors)
  }, [name])
  
  return(
    <form className="playlist-form" onSubmit={submitHandler}>  
      <h2>Create your Playlist!</h2>
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
        Create Playlist
      </button>
    </form>
  )
}


export default PlaylistForm;