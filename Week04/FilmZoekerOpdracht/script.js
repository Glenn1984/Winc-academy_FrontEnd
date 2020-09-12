// console.log(movies)

const movieContainer = document.getElementById('movieContainer');


const moviesWithLi = movies.map ((movie) => {
    const li_Tag = document.createElement('li');
    li_Tag.id = 'movieContainer--item';
    const a_Tag = document.createElement('a');
    a_Tag.href = "https://www.imdb.com/title/" + movie.imdbID;
    const img_Tag = document.createElement('img');
    li_Tag.appendChild(a_Tag).appendChild(img_Tag);
    img_Tag.src = movie.Poster;
    return li_Tag;
});


moviesWithLi.forEach ((moviesToDom) => {
    movieContainer.appendChild(moviesToDom);
});



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
            console.log("This doesnt work") // triggers at event.target.value.
            break;
    };
});

const radioButtons = document.querySelectorAll('input[type=radio][name="moviesFilter"][value]');


radioButtons.forEach(radio => radio.addEventListener ('change', handleOnChangeEvent));
// console.log(radioButtons);



const filterMovies = ((inputNode) => {
    // console.log(inputNode)
    const inputValue = inputNode.value;
    // console.log(inputValue);
    const filteredMovies = movies.filter ((movie) => {
        return movie.Title.includes(inputValue);
    });
    console.log(filteredMovies); // Geeft vergelijkings resultaten.


    // check of het woord voor komt in de titels uit je db.
    // je houdt nu een lijst met gefilterde films over.
    // roep nu moviesWithLi aan maar met je gefilterde lijst inplaats van de hele db.
});



const filterLatestMovies = (() => {
    const filterByYears = movies.filter((movie) => {
        return movie.Year > "2013" && movie.Year < "2020";
    });
    console.log(filterByYears);
        // plaats de films in de Dom van 2014 of nieuwer.
        //2014, 2015, 2016, 2017, 2018, 2019.
});





// Search button...

// const searchButton = document.getElementsByTagName("button");
// searchButton.addEventListener ("submit", (searchByClick) => {
// });



// SearchBar
const searchBar = document.getElementById('site-search');

searchBar.addEventListener ("keyup", e => {
    const searchString = e.target.value;
    const filteredMovies = movies.filter (movie => {
        return movie.Title.includes(searchString) || movie.Title.toLowerCase().includes(searchString) || movie.Title.toUpperCase().includes(searchString);
    });
    displayMovies(filteredMovies);
});

const displayMovies = (filteredMovies) => {
    console.log(filteredMovies) // de zoekresultaten komen binnen. (filteredMovies).
    // inpakken in li's (moviesWithli)
    // terug sturen naar Dom (appendchild).
};
// functie en event listener werken, log naar console.
// De resultaten moeten nog naar scherm gezonden worden.




// radio button:
// var radios = document.querySelectorAll('input[type=radio][name="contact"]');
// radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));