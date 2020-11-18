import {ADD_FAVOURITES, DELETE_FAVOURITES} from "../actions"
import INITIAL_STATE from "../state/state";

const reducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_FAVOURITES:
            const newFavourites = [...state];
            const updatedFavourites = newFavourites.concat(payload);
            return updatedFavourites;
        case DELETE_FAVOURITES:
            let newUnfavourites = [...state];
            newUnfavourites = newUnfavourites.filter(item => item.id !== payload);
            return newUnfavourites;
        default:
            return state;
    };
};

export default reducer;