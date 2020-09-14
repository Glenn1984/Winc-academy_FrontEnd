const movieContainer = document.getElementById('movieContainer');


// Adding database in function to wrap it with tags and send back to Dom.

const addMoviesToDom = (movies) => {
    const moviesWithLi = movies.map((movie) => {
        const li_Tag = document.createElement('li');
        li_Tag.id = 'movieContainer--item';
        const a_Tag = document.createElement('a');
        a_Tag.href = "https://www.imdb.com/title/" + movie.imdbID;
        const img_Tag = document.createElement('img');
        li_Tag.appendChild(a_Tag).appendChild(img_Tag);
        img_Tag.src = movie.Poster;
        return movie = li_Tag;
    });
        return moviesWithLi.forEach ((moviesToDom) => {
            movieContainer.appendChild(moviesToDom);
    });
};
addMoviesToDom(movies);


// Grabbing all radio buttons and using switch to send them to the filter functions.

const handleOnChangeEvent = ((event) => {
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
});

const radioButtons = document.querySelectorAll('input[type=radio][name="moviesFilter"][value]');

radioButtons.forEach(radio => radio.addEventListener ('change', handleOnChangeEvent));


// Filter function to filter the titles.

const filterMovies = (wordInMovieTitle) => {
    // console.log(wordInMovieTitle); // Geeft juiste resultaat.
    const searchValue = wordInMovieTitle.value;
    // console.log(searchValue); // Geeft juiste value.
    const filteredMovies = movies.filter ((movie) => {
        return movie.Title.includes(searchValue);
    });
    // console.log(filteredMovies); // Geeft vergelijkings resultaten.
    addMoviesToDom(filteredMovies);
    // return filteredMovies;

    // check of het woord voor komt in de titels uit je db.
    // je houdt nu een lijst met gefilterde films over.
    // roep nu addMoviesToDom aan maar met je gefilterde lijst inplaats van de hele db.
};

// Filter function to filter by years.

const filterLatestMovies = (() => {
    const filterByYears = movies.filter((movie) => {
        return movie.Year > "2013" && movie.Year < "2020";
    });
    console.log(filterByYears);
    // plaats de films in de Dom.
});





// Search button...

// const searchButton = document.getElementsByTagName("button");
// searchButton.addEventListener ("submit", (searchByClick) => {
// });



// SearchBar
const searchBar = document.getElementById('site-search');

searchBar.addEventListener ("keyup", element => {
    const searchString = element.target.value;
    const filteredSearchMovies = movies.filter (movie => {
        return movie.Title.includes(searchString) || movie.Title.toLowerCase().includes(searchString) || movie.Title.toUpperCase().includes(searchString);
    });
    displayMovies(filteredSearchMovies);
});

const displayMovies = (filteredSearchMovies) => {
    console.log(filteredSearchMovies) // de zoekresultaten komen binnen. (filteredMovies).
    return filteredSearchMovies = addMoviesToDom();
    // inpakken in li's.
    // terug sturen naar Dom.
};
// functie en event listener werken, log naar console.
// De resultaten moeten nog naar scherm gezonden worden.






// radio button:
// var radios = document.querySelectorAll('input[type=radio][name="contact"]');
// radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));



// const moviesWithLi = movies.map ((movie) => {
//     const li_Tag = document.createElement('li');
//     li_Tag.id = 'movieContainer--item';
//     const a_Tag = document.createElement('a');
//     a_Tag.href = "https://www.imdb.com/title/" + movie.imdbID;
//     const img_Tag = document.createElement('img');
//     li_Tag.appendChild(a_Tag).appendChild(img_Tag);
//     img_Tag.src = movie.Poster;
//     return li_Tag;
// });


// moviesWithLi.forEach ((moviesToDom) => {
//     movieContainer.appendChild(moviesToDom);
// });