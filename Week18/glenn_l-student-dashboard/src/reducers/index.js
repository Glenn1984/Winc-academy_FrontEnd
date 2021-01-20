import dataReducer from "./LoadData";
import cardDataReducer from "./CardData";
import sortDataReducer from "./SortData";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    dataState: dataReducer,
    cardState: cardDataReducer,
    sortState: sortDataReducer,
});

export default allReducers;