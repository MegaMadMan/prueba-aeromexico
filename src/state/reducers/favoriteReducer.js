const reducer = (state = 0, action) => {
    switch (action.type) {
        case "favorite":
            return state = action.payload;
        case "unfavorite":
            return state = action.payload;
        default:
            return state
    }
};

export default reducer;