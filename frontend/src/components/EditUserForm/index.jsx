import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../../store/users';

function EditUserForm({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username,
      id: user.id,
    };

    dispatch(updateUsername(formData))
      .then(() => history.push('/'))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => <li key={error.id}>{error}</li>)}
      </ul>
      <label htmlFor="username">
        Username
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-label="edit-username"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditUserForm;
