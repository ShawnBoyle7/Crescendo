import { csrfFetch } from "./csrf";

const LOAD_USERS = "users/LOAD_USERS";
const EDIT_USERNAME = "users/EDIT_USERNAME"
const DELETE_USER = "users/DELETE_USER"

const deleteUser = (userId) => ({
  type: DELETE_USER,
  userId
});

const editUsername = (user) => ({
  type: EDIT_USERNAME,
  user
});

const loadUsers = (users) => ({
  type: LOAD_USERS,
  users
});

export const destroyUser = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}`, {
    method: "DELETE"
  });

  if (response.ok) {
    dispatch(deleteUser(userId))
    return;
  }
}

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
    const updatedUser = await response.json();
    console.log(updatedUser)
    dispatch(editUsername(updatedUser));
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
    case LOAD_USERS:
      const allUsers = {}
      action.users.forEach(user => {
        allUsers[user.id] = user
      })
      return allUsers;
    case EDIT_USERNAME:
      const newState = {...state}
      newState[action.user.id] = action.user
      return newState;
    case DELETE_USER:
      const newNewState = {...state}
      delete newNewState[action.userId]
      return newNewState;
      default:
      return state;
  }
}

export default userReducer;