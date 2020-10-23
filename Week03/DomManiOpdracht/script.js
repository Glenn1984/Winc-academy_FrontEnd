// Function for textContent and creating the lists.
const oneOfBigFive = (element) => {
    const oneOfBigFiveAnimal = element.target.textContent;
    const newLi = document.createElement('li');
    newLi.classList.add('spotted-animals-list-item')
    newLi.appendChild(document.createTextNode(oneOfBigFiveAnimal))
    const menu = document.getElementById('spotted-animals-list')
    menu.appendChild(newLi);
}

// Event listener for big five buttons.
const bigFiveButton = document.querySelectorAll('.big-five-button')
bigFiveButton.forEach(list => {
    list.addEventListener('click', oneOfBigFive);
});


//* Another possible try.
// const bigFiveButton = document.querySelectorAll('.big-five-button')
// bigFiveButton.forEach(list => {
//     list.addEventListener('click', (element) => {
//         const oneOfBigFiveAnimal = element.target.textContent;
//             const newLi = document.createElement('li');
//             newLi.classList.add('spotted-animals-list-item')
//             newLi.appendChild(document.createTextNode(oneOfBigFiveAnimal))
//             const menu = document.getElementById('spotted-animals-list')
//             menu.appendChild(newLi);
//     });
// });


// Delete button
const deleteButton = document.getElementById('remove-first-item-button');
deleteButton.addEventListener('click', () => {
    const parent = document.getElementById('spotted-animals-list');
        const child = parent.getElementsByTagName('li')[0];
        parent.removeChild(child)
})


// Delete all button
const deleteButtonAll = document.getElementById('remove-all-button')
deleteButtonAll.addEventListener('click', () => {
    const parent = document.getElementById('spotted-animals-list');
    parent.innerHTML = '';
})