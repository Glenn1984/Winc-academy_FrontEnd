const defaultState = {
    sort: {
        range: "Exercise",
        order: "asc",
    },
    slicing: {
        Difficulty: true,
        Amusing: true,
        weeks: {
            scrum: true,
            week1: true,
            week2: true,
            week3: true,
            week4: true,
            week5: true,
            week6: true,
        },
    },
};

export default defaultState;