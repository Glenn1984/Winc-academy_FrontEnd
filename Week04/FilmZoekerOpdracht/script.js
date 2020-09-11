// console.log(movies)

const movieContainer = document.getElementById('movieContainer');


const moviesWithLi = movies.map((movie) => {
    const li_Tag = document.createElement('li');
    li_Tag.classList.add('movieContainer--item');
    const a_Tag = document.createElement('a');
    a_Tag.href = "https://www.imdb.com/title/" + movie.imdbID;
    const img_Tag = document.createElement('img');
    li_Tag.appendChild(a_Tag).appendChild(img_Tag);
    img_Tag.src = movie.Poster;
    return li_Tag;
});


moviesWithLi.forEach((moviesToDom) => {
    movieContainer.appendChild(moviesToDom);
});




const handleOnChangeEvent = ((event) => {
    // console.log(event.target.value); // werkt perfect.
    switch (event.target) { // event.target.value stuurt geen gegevens door - event.target wel
        case latestMovies: {
            filterLatestMovies(latestMovies);
            break;
        } // add brackets when working with the same variable.
        case avengersMovies: {
            filterMovies(avengersMovies);
            break;
        }
        case xmenMovies: {
            console.log("hey ik ben { xmenMovies } film")
            break;
        }
        case princessMovies: {
            console.log("hey ik ben {princessMovies} film")
            break;
        }
        case batmanMovies: {
            console.log("hey ik ben { batmanMovies } film")
            break;
        }
        default:
            console.log("This doesnt work") // slaat aan bij event.target.value
            break;
    }
});

const radioButtons = document.querySelectorAll('input[type=radio][name=moviesFilter]');


radioButtons.forEach(radio => radio.addEventListener('change', handleOnChangeEvent));
// console.log(radioButtons);



const filterMovies = ((wordInMovieTitle) => {
    // console.log(filterMovies) // geeft geen value, wel target.
    wordInMovieTitle.filter((accumulator, currentvalue) => {
        console.log(currentvalue);
    });
});



const filterLatestMovies = (() => {
        
});





// Search button...

// const button = document.createElement("button");
// button.textContent = "Search";
const searchBar = document.getElementById('site-search');
searchBar.addEventListener("keyup", e => {
    const searchString = e.target.value;
    const filteredMovies = movies.filter(movie => {
        return movie.Title.includes(searchString);
    });
    displayMovies(console.log(filteredMovies));
});

const displayMovies = (element) => {
    
    return element;
};
// functie en event listener werken, log naar console.
// De resultaten moeten nog naar scherm gezonden worden.




// optie 1 -radio button:
// var radios = document.querySelectorAll('input[type=radio][name="contact"]');
// radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));