const main = document.querySelector("#main");
main.innerHTML = "Druk op de button ";
// console.log(main);

const button = document.createElement("button");
button.innerHTML = "Click";
// console.log(button)

main.appendChild(button);



button.addEventListener("click", () => {
const getQuote = async () => {
    const resolve = await getData();
    const quote = resolve;
    console.log(quote.value)
        const ul_Tag = document.createElement("ul");
        const li_Tag = document.createElement('li');
        li_Tag.textContent = `${quote.value}`;
        // console.log(li_Tag);
        main.appendChild(ul_Tag);
        ul_Tag.appendChild(li_Tag);
};
getQuote();
    

});

