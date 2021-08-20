import { csrfFetch } from "./csrf";

const LOAD_USERS = "users/LOAD_USERS";
const EDIT_USERNAME = "users/EDIT_USERNAME"

const editUsername = (user) => ({
  type: EDIT_USERNAME,
  user
});

const loadUsers = (users) => ({
  type: LOAD_USERS,
  users
});

export const updateUsername = (formData) => async (dispatch) => {
  const { id, username } = formData
  const response = await csrfFetch(`/api/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username
    })
  });

  if (response.ok) {
    const updatedUsername = await response.json();
    dispatch(editUsername(updatedUsername));
  }
}

export const getUsers = () => async (dispatch) => {
  const response = await fetch('/api/users')

  if (response.ok) {
    const users = await response.json()
    dispatch((loadUsers(users)));
  };
};

const initialState = {}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_USERS: {
      const allUsers = {}
      action.users.forEach(user => {
        allUsers[user.id] = user
      })
      return allUsers;
    }
    case EDIT_USERNAME:
      return { ...state, [action.user.id]: {...state[action.user.id], ...action.user} }
      default: 
      return state;
  }
}

export default userReducer;