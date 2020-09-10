// console.log(movies)

const movieContainer = document.getElementById('movieContainer');

// const li_Element = movieContainer.getElementsByTagName('li');


// const addMoviesToDom = movies.map((create_Li) => {
//     const li_Tag = document.createElement('li');
//     li_Tag.classList.add('movieContainer--item');
//     li_Tag.textContent = create_Li.Title;
//     return create_Li;
// });
// console.log(addMoviesToDom);


// addMoviesToDom.forEach((addToDom) => {

// // .appendChild(li_Tag);
// //     const img_Tag = li_Tag.createElement('img');
// //     const img_Tag = document.createElement('img');
// //     img_Tag.appendChild(li_Element);
// //     addToDom.Title = li_Element;
// //     img_Tag.src = addToDom.Poster;
// //     return addToDom;
// console.log(addToDom);
// });
// console.log(addMoviesToDom);


const movieContainer = document.getElementById('movieContainer');

const addMoviesToDom = movies.map((addToDom) => {
    const li_Tag = document.createElement('li');
    const li_Element = movieContainer.appendChild(li_Tag);
    li_Element.textContent = addToDom.Title;
    
})
console.log(addMoviesToDom)