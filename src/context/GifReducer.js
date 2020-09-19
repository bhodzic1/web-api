const updateQuery = (searchText) => {
    localStorage.setItem('gifsQuery', JSON.stringify(searchText.length > 0 ? searchText : []));
}

const updateList = (gifs) => {
    localStorage.setItem('gifs', JSON.stringify(gifs.length > 0 ? gifs : []));
}

export const GifReducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_GIF_LIST":
            if (action.payload != null) {
                updateList(action.payload);
                state.gifs = [...action.payload];
            }
            return {
                ...state,
                gifs: [...state.gifs]
            }
        case "SET_QUERY":
            if (action.payload != null) {
                updateQuery(action.payload);
                state.query = [action.payload];
            }
            return {
                ...state,
                query: [...state.query]
            }
        default:
            return state;
    }
}