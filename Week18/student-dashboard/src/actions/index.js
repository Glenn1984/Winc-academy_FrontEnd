export const addToDo = "addToDo";
// export const ADD_FAVOURITES = "ADD_FAVOURITES";
// export const DELETE_FAVOURITES = "DELETE_FAVOURITES";

const addTodo = text => {
    return {
        type: addToDo,
        payload: text,
    }
}

export default addTodo;


// export const addFavourites = (favourites) => {
//     return {
//         type: ADD_FAVOURITES,
//         payload: favourites,
//     };
// };


// export const deleteFavourites = (favouritesId) => {
//     return {
//         type: DELETE_FAVOURITES,
//         payload: favouritesId,
//     };
// };