import { LOAD_DATA } from "../actions";
import INITIAL_STATE from "../state/Winc Eindopdracht – Studenten Mock data – Frontend Cursus Opdrachten.json";

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state
            }
        default:
            return state;
    };
};

export default dataReducer;