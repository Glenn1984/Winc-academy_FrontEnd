export const LOAD_DATA = "LOAD_DATA";
export const ADD_CARD = "ADD_CARD";
export const SORT_DATA = "SORT_DATA";

export const loadJSONData = (payload => {
    return {
        type: LOAD_DATA,
        payload
    };
});

export const loadCardData = (payload => {
    return {
        type: ADD_CARD,
        payload
    };
});

export const sortData = (payload => {
    return {
        type: SORT_DATA,
        payload
    };
});