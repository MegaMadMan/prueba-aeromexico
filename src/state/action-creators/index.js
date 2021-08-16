export const addFavorite = (id) => {
    console.log(id)
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: id
        })
    }
}

export const removeFavorite = (id) => {
    return (dispatch) => {
        dispatch({
            type: "remove",
            payload: id
        })
    }
}