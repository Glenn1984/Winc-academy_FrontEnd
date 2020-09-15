// movies is a database out of another file. 'see movieDB.js'

const movieContainer = document.getElementById('movieContainer');


// Adding database in function to wrap it with tags and send back to Dom.

const addMoviesToDom = () => {
    const moviesWithLi = movies.map ((movie) => {
        const li_Tag = document.createElement('li');
        li_Tag.id = 'movieContainer--item';
        const a_Tag = document.createElement('a');
        a_Tag.href = "https://www.imdb.com/title/" + movie.imdbID;
        const img_Tag = document.createElement('img');
        li_Tag.appendChild(a_Tag).appendChild(img_Tag);
        img_Tag.src = movie.Poster;
        return movie = li_Tag;
    });

    moviesWithLi.forEach ((moviesToDom) => {
        movieContainer.appendChild(moviesToDom);
    });
};
addMoviesToDom();

// Grabbing all radio buttons and using switch to send them to the filter functions.

const handleOnChangeEvent = (event) => {
    // movieContainer.innerHTML = '';
    switch (event.target) {
        case latestMovies: {
            filterLatestMovies(latestMovies);
            break;
        } // add brackets when working with the same variable and blocks global scope.
        case avengersMovies: {
            filterMovies(avengersMovies);
            break;
        }
        case xmenMovies: {
            filterMovies(xmenMovies);
            break;
        }
        case princessMovies: {
            filterMovies(princessMovies);
            break;
        }
        case batmanMovies: {
            filterMovies(batmanMovies);
            break;
        }
        default:
            console.log("Make another selection");
            break;
    };
};

const radioButtons = document.querySelectorAll ('input[type=radio][name="moviesFilter"][value]');
radioButtons.forEach (radio => radio.addEventListener ('change', handleOnChangeEvent));


// Filter function to filter the titles.

const filterMovies = (wordInMovieTitle) => {
    // movieContainer.innerHTML = '';
    const searchValue = wordInMovieTitle.value;

    const filteredMovies = movies.filter ((movie) => {
        return movie.Title.includes(searchValue);
    });

    return addMoviesToDom(filteredMovies);
};


// Filter function to filter by years.

const filterLatestMovies = () => {
    // movieContainer.innerHTML = '';

    const filterByYears = movies.filter ((movie) => {
        return movie.Year > "2013" && movie.Year < "2020";
    });

    return addMoviesToDom(filterByYears);
};


// SearchBar

const searchBar = document.getElementById('site-search');

searchBar.addEventListener("keyup", element => {
    // movieContainer.innerHTML = '';
    const searchString = element.target.value;

    const filteredSearchMovies = movies.filter (movie => {
        return movie.Title.toLowerCase().includes(searchString) || movie.Title.toUpperCase().includes(searchString);
    });

    displayMovies(filteredSearchMovies);
});

const displayMovies = (filteredSearchMovies) => {
    // movieContainer.innerHTML = '';
    return addMoviesToDom(filteredSearchMovies);
};