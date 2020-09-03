

// From up in the HTML-tree down to Colors


const background = document.getElementById("background");
const main = document.getElementById("main");
const hamburgerIcon = document.getElementById("hamburger__icon");


// HamburgerChangerOnMain

hamburgerIcon.addEventListener("click", () => {
    main.classList.toggle('hamburgerIsWorking');
});


// ColorsChanger


// Grey

document.getElementById("listGrey").addEventListener("click", () => {
    background.className = "backgroundIsGrey";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is grijs!";
});


// Red

document.getElementById("listRed").addEventListener("click", () => {
    background.className = "backgroundIsRed";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is rood!";
});


// Blue

document.getElementById("listBlue").addEventListener("click", () => {
    background.className = "backgroundIsBlue";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is blauw!";
});


// Green

document.getElementById("listGreen").addEventListener("click", () => {
    background.className = "backgroundIsGreen";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is groen!";
});


// Orange

document.getElementById("listOrange").addEventListener("click", () => {
    background.className = "backgroundIsOrange";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is oranje!";
});


// Purple

document.getElementById("listPurple").addEventListener("click", () => {
    background.className = "backgroundIsPurple";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is paars!";
});