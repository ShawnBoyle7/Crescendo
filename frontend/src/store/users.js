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
        const updatedUser = await response.json();
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
        dispatch(loadUsers(users))
    }
}

export const deleteSongLike = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/song/${payload.songId}/${payload.userId}`, {
        method: "DELETE"
    })
    
    if (response.ok) {
        const users = await response.json();
        dispatch(loadUsers(users))
    }
}

export const likeArtist = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/users/like-artist', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const users = await response.json();
        dispatch(loadUsers(users))
    }
}

export const deleteArtistLike = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/artist/${payload.artistId}/${payload.userId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        const users = await response.json();
        dispatch(loadUsers(users))
    }
}

export const likeAlbum = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/users/like-album', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    
    if (response.ok) {
        const users = await response.json();
        dispatch(loadUsers(users))
    }
}

export const deleteAlbumLike = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/album/${payload.albumId}/${payload.userId}`, {
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
        default:
            return state;
    }
}

export default userReducer;