

const addMovieGenreToList = document.getElementById("movieGenres")

const getMovieGenre = async () => {
    const resolve = await getData()
    const genreList = resolve.genres
    console.log(genreList);
    genreList.forEach((addMovie) => {
        const li_Tag = document.createElement('li');
        li_Tag.textContent = `Genre naam: ${addMovie.name} id: ${addMovie.id}`;
        // console.log(li_Tag);
        addMovieGenreToList.appendChild(li_Tag);
    });
};
getMovieGenre();


// Deel 2

const favouriteMovie = document.getElementById("favouriteMovie");

const myFavouriteMovie = async () => {
    const resolve = await getData2();
    const myFavo = resolve.movie_results;
    console.log(myFavo)
    myFavo.forEach((addMovie) => {
        const li_Tag = document.createElement('li');
        li_Tag.textContent = `Titel: ${addMovie.title}`;
        favouriteMovie.appendChild(li_Tag);
    });
};
myFavouriteMovie();


// Deel 3a

const topRatedMovies = document.getElementById("topRated");

const myTopRatedMovies = async () => {
    const resolve = await getData3();
    const topRated = resolve.results;
    console.log(topRated)
    topRated.forEach((addMovie) => {
        const li_Tag = document.createElement('li');
        li_Tag.textContent = `Titel: ${addMovie.title}`;
        topRatedMovies.appendChild(li_Tag);
    });
};
myTopRatedMovies();


// Deel 3b

const filteredMovies = document.getElementById("from1975");

const myFilteredMovies = async () => {
    const resolve = await getData4();
    const filterMovies = resolve.results;
    console.log(filterMovies)
    filterMovies.forEach((addMovie) => {
        const li_Tag = document.createElement('li');
        li_Tag.textContent = `Titel: ${addMovie.title} id: ${addMovie.genre_ids}`;
        filteredMovies.appendChild(li_Tag);
    });
};
myFilteredMovies();