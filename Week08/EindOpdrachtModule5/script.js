const main_Tag = document.querySelector(".main");


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



const addToDo = async (toDo) => { //! conversion/getData
    // console.log(toDo)
    const response = await conversion(toDo); //? Result after conversion, send to Dom.
    const result = response.map(res => {
        const ul_Tag = document.querySelector(".todoList__list");
        const li_Tag = document.createElement("li");
        li_Tag.classList.add("todoList__item");
        li_Tag.innerHTML = `<span class="todoList__item">
        ${res.description}</span>
        <button name="checkButton" class="todoList__checkButton">
        <i class="fas fa-check-square"></i></button>
        <button name="deleteButton" class="todoList__deleteButton">
        <i class="fas fa-trash"></i></button>`;
        ul_Tag.appendChild(li_Tag);
    });
    return result;
};


const getSubmit = (event) => { //! sendData
    event.preventDefault();
    const input = document.querySelector("input");
    if (input.value != "")
        sendData({ description: input.value, done: false }); //? Result goes to server.
    input.value = "";
};

document.querySelector("form").addEventListener("submit", getSubmit);



const checkToDo = (event) => { //! putData
    const item = event.target.parentNode;
    console.log(item)
    if (item.style.textDecoration === "line-through") {
        item.style.textDecoration = "none";

        putData({ id: item, done: true });
         //? putData laten weten dat de staat veranderd - boolean true
    
    } else {
        item.style.textDecoration = "line-through";

        putData({ id: item, done: false });
        //? putData laten weten dat de staat veranderd - boolean false
    };
};

// In je delete geef je geen body mee, dus daar weet hij inderdaad niet wat hij moet doen.
// In putData zou je de id in de body kunnen verwerken.

const deleteToDo = (event) => { //! deleteData
    const item = event.target.parentNode;
    item.addEventListener("transitionend", () => {
        item.remove();

        //? deleteData verwijderen op id.
        deleteData({id: id});
    });
    item.classList = "todoList__item--fall";
};



const getDeleteOrCheckClick = (event) => {
    
    if (event.target.name === "checkButton")
        checkToDo(event);
    
    if (event.target.name === "deleteButton")
        deleteToDo(event);
};

document.querySelector(".todoList__list").addEventListener("click", getDeleteOrCheckClick);



const getClearAll = () => { //! deleteAllData
    const ul_Tag = document.querySelector(".todoList__list");
    ul_Tag.remove();

    //? deleteAllData - alle id's verwijderen.

};

const a_Tag = document.querySelector(".todoList__clearAll").addEventListener("click", getClearAll);

