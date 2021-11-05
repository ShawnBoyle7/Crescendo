import { csrfFetch } from "./csrf";

const LOAD_USERS = "users/LOAD_USERS";
const EDIT_USERNAME = "users/EDIT_USERNAME"
const REMOVE_LIKE = "users/REMOVE_LIKE"

const editUsername = (user) => ({
    type: EDIT_USERNAME,
    user
});

const loadUsers = (users) => ({
    type: LOAD_USERS,
    users
});

const removeLike = (payload) => ({
    type: REMOVE_LIKE,
    payload
})

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
};

export const getUsers = () => async (dispatch) => {
    const response = await fetch('/api/users')

    if (response.ok) {
        const users = await response.json()
        dispatch((loadUsers(users)));
    };
};

export const likeSong = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/users/like-song', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    
    if (response.ok) {
        const users = await response.json();
        // const payload = await response.json();
        dispatch(loadUsers(users))
        // dispatch(likeSong(payload))
    }
}

export const deleteLike = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${payload.songId}/${payload.userId}`, {
        method: "DELETE"
    })
    
    if (response.ok) {
        const users = await response.json();
        dispatch(loadUsers(users))
    }
}

const initialState = {}

const userReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case LOAD_USERS:
            const allUsers = {}
            action.users.forEach(user => {
                allUsers[user.id] = user
            })
            return allUsers;
        case EDIT_USERNAME:
            stateCopy[action.user.id] = action.user
            return stateCopy;
        case REMOVE_LIKE:

        default:
            return state;
    }
}

export default userReducer;