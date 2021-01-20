import { ADD_CARD } from "../actions";
import arrayOfStudentInfo from "../state/createData";

const cardDataReducer = (state = arrayOfStudentInfo, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
            }
        default:
            return state;
    };
};

export default cardDataReducer;