
const createToDoList = () => {
    const main = document.querySelector(".main");
    
    const form = document.createElement("form");
    form.classList.add("form");

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.classList.add("form__text")
    inputField.placeholder = "New to do...";

    const inputButton = document.createElement("button");
    inputButton.type = "submit";
    inputButton.classList.add("form__button");
    inputButton.textContent = "Add Task";

    const ul_Tag = document.createElement("ul");
    ul_Tag.classList.add("list");

    main.appendChild(form).append(inputField, inputButton);
    main.append(ul_Tag);
};

createToDoList();



const emptyToDoList = (() => (document.querySelector("ul").innerHTML = ""));



const addToDoToList = async () => {
    const toDoObject = await getData();

    toDoObject.forEach(toDo => {
        const ul_Tag = document.querySelector("ul");
        const li_Tag = document.createElement("li");
        li_Tag.id = toDo.id;
        li_Tag.classList.add("list__item");

        const idSpan = document.createElement("span");
        idSpan.classList.add("list__idspan");
        idSpan.textContent = toDo.id;

        const descSpan = document.createElement("span");
        descSpan.classList.add("list__descspan");
        descSpan.textContent = toDo.description;
        descSpan.contentEditable = true;
        
        const checkButton = document.createElement("button");
        checkButton.name = "checkButton";
        checkButton.id = toDo.id;
        checkButton.classList.add("list__checkbtn");
        checkButton.type = "submit";
        checkButton.innerHTML = `<i class="fas fa-check-square"></i>`;

        const deleteButton = document.createElement("button");
        deleteButton.name = "deleteButton";
        deleteButton.id = toDo.id;
        deleteButton.classList.add("list__deletebtn");
        deleteButton.type = "submit";
        deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;

        ul_Tag.appendChild(li_Tag).append(idSpan, descSpan, checkButton, deleteButton);
    });
};

addToDoToList();



const getInput = async (event) => {
    event.preventDefault();

    const inputField = document.querySelector("input");
    await sendData({ description: inputField.value, done: false });

    emptyToDoList();
    addToDoToList();
    
    inputField.value = "";
    
};

document.querySelector("form").addEventListener("submit", getInput);



const checkToDo = async (event) => {
    const listItem = event.target.parentNode;
    const checkButtonID = event.target.id;
    // console.log("check button id ", checkButtonID);
    const checkButtonDesc = event.target.previousSibling.innerHTML;
    // console.log("check button desc ", checkButtonDesc);
    if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "none";
        await updateData(checkButtonID, checkButtonDesc, false);
    } else {
        listItem.style.textDecoration = "line-through";
        await updateData(checkButtonID, checkButtonDesc, true);
    };
};



const deleteToDo = async (event) => {
    const listItem = event.target.parentNode;
    const deleteListID = event.target.parentNode.id;
    const deleteButtonID = event.target.id;

    if (deleteListID === deleteButtonID)
    await deleteData(deleteButtonID);

    listItem.classList = "list__item--fall";
    listItem.remove();
};



const sortClickToCheckOrDelete = async (event) => {
    if (event.target.name === "checkButton") {
        checkToDo(event);
    } else if (event.target.name === "deleteButton") {
        deleteToDo(event);
    };
};

document.querySelector(".list").addEventListener("click", sortClickToCheckOrDelete);