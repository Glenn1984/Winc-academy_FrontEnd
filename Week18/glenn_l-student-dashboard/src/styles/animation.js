const animation = {

    difficulty: {
        onExit: {
            duration: 500,
            before: () => ({
                _y: 0,
                fill: "a888df",
            }),
        },
    },

    amusing: {
        onExit: {
            duration: 500,
            before: () => ({
                _y: 0,
                fill: "#00bcd6",
            }),
        },
    },
};

export default animation;