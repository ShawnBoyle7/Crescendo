import { csrfFetch } from "./csrf"

const LOAD_PLAYLISTS = "playlists/LOAD_PLAYLISTS";
const ADD_PLAYLIST = "playlists/ADD_PLAYLIST";
const RENAME_PLAYLIST = "playlists/RENAME_PLAYLIST"
const DESTROY_PLAYLIST = "/playlists/DESTROY_PLAYLIST"

const loadPlaylists = (playlists) => ({
    type: LOAD_PLAYLISTS,
    playlists
});

const destroyPlaylist = (playlistId) => ({
    type: DESTROY_PLAYLIST,
    playlistId
})

const renamePlaylist = (playlist) => ({
    type: RENAME_PLAYLIST,
    playlist,
});

const addPlaylist = (playlist) => ({
    type: ADD_PLAYLIST,
    playlist,
});

export const getPlaylists = () => async (dispatch) => {
    const response = await fetch('/api/playlists')

    if (response.ok) {
        const playlists = await response.json()
        dispatch((loadPlaylists(playlists)));
    };
};

export const addPlaylistSong = (payload) => async (dispatch) => {
    console.log("PAYLOAD", payload)
    const response = await csrfFetch('/api/playlists/new-song', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const playlists = await response.json();
        dispatch(loadPlaylists(playlists))
    }
}

export const deletePlaylistSong = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlists/${payload.playlistId}/${payload.songId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const playlists = await response.json();
        dispatch(loadPlaylists(playlists))
    }
}

export const deletePlaylist = (playlistId) => async dispatch => {
    const response = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(destroyPlaylist(playlistId))
    }
}

export const editPlaylist = (name, description, playlistId) => async dispatch => {
    const response = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, description})
    });

    if (response.ok) {
        const updatedPlaylist = await response.json();
        dispatch(renamePlaylist(updatedPlaylist));
        return updatedPlaylist;
    }
}

export const createPlaylist = (formData) => async (dispatch) => {
    const response = await csrfFetch('/api/playlists', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    });

    // 4.
    if (response.ok) {
        const playlist = await response.json()
        dispatch((addPlaylist(playlist)));
        return playlist;
    }
};

const initialState = {}

// 5.
const playlistReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case LOAD_PLAYLISTS: {
            const allPlaylists = {}
            action.playlists.forEach(playlist => {
                allPlaylists[playlist.id] = playlist
            })
            return allPlaylists;
        }
        case ADD_PLAYLIST:
            stateCopy = { ...state }
            [action.playlist.id] = action.playlist
            return stateCopy;
        case RENAME_PLAYLIST:
            stateCopy = { ...state }
            [action.playlist.id] = action.playlist
            return stateCopy;
        case DESTROY_PLAYLIST:
            stateCopy = { ...state }
            delete stateCopy[action.playlistId]
            return stateCopy;
        default:
            return state;
    }
}

export default playlistReducer;