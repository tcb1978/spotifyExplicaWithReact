// initial state
const initialState = {
    artist: {}
}

// action types
const ARTIST = 'ARTIST'

// reducer
export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case ARTIST:
            return { ...state, artist: payload }

        default: return state 
    }
}

// action creators
export const artist = (artist) => {
    return {
        type: ARTIST,
        payload: artist
    }
}