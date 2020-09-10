// console.log(movies)

const movieContainer = document.getElementById('movieContainer');


const moviesWithLi = movies.map((movie) => {
    const li_Tag = document.createElement('li');
    li_Tag.classList.add('movieContainer--item');
    const img_Tag = document.createElement('img');
    li_Tag.appendChild(img_Tag);
    img_Tag.src = movie.Poster;
    return li_Tag;
});


moviesWithLi.forEach((moviesToDom) => {
    movieContainer.appendChild(moviesToDom);
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

const displayMovies = (element) => { return movies.element };
// functie en event listener werken, log maar naar console.
// De resultaten moeten nog naar scherm gezonden worden.


// optie 1 -radio button:
// var radios = document.querySelectorAll('input[type=radio][name="contact"]');
// radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));





// let headerButton = document.getElementsByTagName("button");
// headerButton = document.addEventListener("click", function () {
    
//     alert("Search");
// });