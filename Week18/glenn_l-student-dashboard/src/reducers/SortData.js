import { SORT_DATA } from "../actions";
import defaultState from "../state/sortData";

const sortDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SORT_DATA:
            return {
                ...state,
            }
        default:
            return state;
    };
};

export default sortDataReducer;