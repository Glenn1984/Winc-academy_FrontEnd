import reducer from "./input";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    handleState: reducer,
});

export default allReducers;