const main_Tag = document.querySelector(".main");



//? Het maken van het input veld met button.

const createInputField = () => {
    const form_Tag = document.createElement("form");
    const input_Tag = document.createElement("input");
    const button_Tag = document.createElement("button");
    const icon_Tag = document.createElement("i");
    main_Tag.appendChild(form_Tag);
    form_Tag.classList.add("form");
    form_Tag.appendChild(input_Tag);
    input_Tag.type = "form__text";
    input_Tag.placeholder = "New To Do...";
    form_Tag.appendChild(button_Tag);
    button_Tag.type = "submit";
    button_Tag.classList.add("form__button");
    button_Tag.appendChild(icon_Tag);
    icon_Tag.classList.add("fas","fa-plus-square");
};

createInputField();



//? Het maken van de TODO lijst.

const makeToDoList = () => {
    const div_Tag = document.createElement("div");
    const ul_Tag = document.createElement("ul");
    const a_Tag = document.createElement("a");
    main_Tag.appendChild(div_Tag);
    div_Tag.classList.add("todoList");
    div_Tag.appendChild(ul_Tag);
    ul_Tag.classList.add("todoList__list");
    div_Tag.appendChild(a_Tag);
    a_Tag.classList.add("todoList__clearAll");
    a_Tag.textContent = "Clear All";
};

makeToDoList();



//? Het toevoegen van de TODO.

const addToDoToList = async () => {
    const toDoObject = await dataConversion();
    
    const completeObject = toDoObject.map(toDoObject => toDoObject.description);

    completeObject.forEach(err => {
        const ul_Tag = document.querySelector(".todoList__list");
        const li_Tag = document.createElement("li");
        li_Tag.classList.add("todoList__item");
        li_Tag.innerHTML = `<span class="todoList__item">
        ${err}</span>
        <button name="checkButton" class="todoList__checkButton">
        <i class="fas fa-check-square"></i></button>
        <button name="deleteButton" class="todoList__deleteButton">
        <i class="fas fa-trash"></i></button>`;
        ul_Tag.appendChild(li_Tag);
    });
};



//? Het verkrijgen van de input waarde

const getInput = async (event) => {
    event.preventDefault();

    const inputField = document.querySelector("input");
    const input = inputField.value;
    await sendData({ description: input, done: false });
    await addToDoToList();
    inputField.value = "";
};

document.querySelector("form").addEventListener("submit", getInput);



//? Het checken van de TODO - doorstrepen.

const checkToDo = async (event) => { //! putData
    const item = event.target.parentNode;
    console.log(item)
    if (item.style.textDecoration === "line-through") {
        item.style.textDecoration = "none";

        //? PUT Data - true

        // await putData();
    } else {
        item.style.textDecoration = "line-through";

        //? PUT Data  - false
    };
};



//? Het verwijderen van een TODO

const deleteToDo = (event) => {
    const id = event.target;

    const item = event.target.parentNode;
    item.addEventListener("transitionend", () => {
        item.remove();

    });

    deleteData(id);
    
    item.classList = "todoList__item--fall";
    item.remove();
};



//? De check waar de geklikte button heen moet - doorstrepen of verwijderen.

const getDeleteOrCheckClick = (event) => {
    
    if (event.target.name === "checkButton")
        checkToDo(event);
    
    if (event.target.name === "deleteButton")
        deleteToDo(event);
};

document.querySelector(".todoList__list").addEventListener("click", getDeleteOrCheckClick);



// //? Alles verwijderen van de TODO lijst

const getClearAll = async () => {
    const object = await dataConversion();
    
    const ul_Tag = document.querySelector(".todoList__list");
    ul_Tag.innerHTML = "";

    deleteAllData(object.id);
};

const a_Tag = document.querySelector(".todoList__clearAll").addEventListener("click", getClearAll);