const LOAD_SONGS = "songs/LOAD_SONGS";

const loadSongs = (songs) => ({
    type: LOAD_SONGS,
    songs
});

export const getSongs = () => async (dispatch) => {
    const response = await fetch('/api/songs')

    if (response.ok) {
        const songs = await response.json()
        dispatch((loadSongs(songs)));
    };
};

const initialState = {}

const songReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_SONGS: {
            const allSongs = {}
            action.songs.forEach(song => {
                allSongs[song.id] = song
            })
            return allSongs;
        }
            default: 
            return state;
    }
}

export default songReducer;