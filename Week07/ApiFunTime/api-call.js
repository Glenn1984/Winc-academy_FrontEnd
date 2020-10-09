async function getData() {
    try {
        const apiUrl = `https://www.tronalddump.io/random/quote`;
        const res = await fetch(apiUrl, {method: "GET"})
        return await res.json()
    } catch (error) {
        console.log(error);
    };
};
