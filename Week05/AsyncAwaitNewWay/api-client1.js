const API_KEY = "";

async function getData() {
    try {
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
        const apiUrl2 = `https://api.themoviedb.org/3/find/tt0110357?api_key=${API_KEY}&external_source=imdb_id`;
        const res = await fetch(apiUrl, {method: "GET"})
        return await res.json()
    } catch (error) {
        console.log(error);
    };
};

async function getData2() {
    try {
        const apiUrl2 = `https://api.themoviedb.org/3/find/tt0110357?api_key=${API_KEY}&external_source=imdb_id`;
        const res = await fetch(apiUrl2, {method: "GET"})
        return await res.json()
    } catch (error) {
        console.log(error);
    };
};

async function getData3() {
    try {
        const apiUrl3 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020&primary_release_date.gte=2020&vote_count.gte=3&vote_count.lte=9&with_genres=28&without_genres=12%2C%2014%2C%2016%2C%2018%2C%2027%2C%2035%2C%2036%2C%2053%2C%2080%2C%2099%2C%20878`;
        const res = await fetch(apiUrl3, {method: "GET"})
        return await res.json()
    } catch (error) {
        console.log(error);
    };
};

async function getData4() {
    try {
        const apiUrl4 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975&vote_count.gte=4&vote_count.lte=6`;
        const res = await fetch(apiUrl4, {method: "GET"})
        return await res.json()
    } catch (error) {
        console.log(error);
    };
};