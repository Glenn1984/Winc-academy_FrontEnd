

const main = document.querySelector("main");
const buttons = document.querySelectorAll("button");
// const countryList = document.getElementById("countryList");
// const capricornWomen = document.getElementById("capricornWomen");
// const oldCreditCards = document.getElementById("oldCreditCards");
// const mostPeople = document.getElementById("mostPeople");
// const averageAge = document.getElementById("averageAge");
// const matchMaking = document.getElementById("matchMaking");


// console.log(buttons); // Log NodeList(6); 
const ul_Tag = document.createElement('ul'); // In de functie krijgt elk list element een ul element..

const databaseWithPersonData = (addClick) => {
    // console.log(addClick); // Data komt goed binnen.

    const personDataWithLi = addClick.map((personData) => {

        // console.log(personData); Data komt goed binnen.

        const li_Tag = document.createElement('li');

        li_Tag.textContent = `Land: ${personData.region}`; // Alleen personData geeft [Object object]

        main.appendChild(ul_Tag).appendChild(li_Tag);

        return personData = li_Tag; // is dit goed zo ? Wat is de beste manier ?
    });

    // console.log(personDataWithLi) // Log 200 personen

    personDataWithLi.forEach((addToDom) => {
        console.log(addToDom) // log 200 personen met li element.
        ul_Tag.appendChild(addToDom);
    });
};

databaseWithPersonData(randomPersonData);


buttons.forEach((allButtons) => {
    allButtons.addEventListener("click", (event) => {
    
        // console.log(event) // Log alle 6 de buttons
    
        // const target = event.target.id;
    
        // console.log(target) // Log alle id's
    
        switch (event.target) {
            case countryList: {
                sortCountryList(countryList);
                break;
            }
            case capricornWomen: {
                console.log(`Werkt het ? ${capricornWomen}`);
                break;
            }
            case oldCreditCards: {
                console.log('Het zal vast werken');
                break;
            }
            case mostPeople: {
                console.log("coffee");
                break;
            }
            case averageAge: {
                console.log('........');
                break;
            }
            case matchMaking: {
                console.log("genoeg");
                break;
            }
            default:
                console.log("...Verkeerde button geklikt...");
                break;
        };
    });
});


const sortCountryList = (sortByCountry) => {
    main.innerHTML = '';
    const searchValue = sortByCountry.region;
    const sortCountry = sortByCountry.sort(searchValue);
    return databaseWithPersonData(sortCountry);

// Maak een lijst van alle landen, gesorteerd op naam van het land.
    
// alfabetische volgorde en dubbele eruit ?
};


// const sortCapricornWomen = (sortByCapricornWomen) => {
//     main.innerHTML = '';
//     const searchValue = sortByCapricornWomen;
//     const 

// Maak een lijst van mensen:
// laat voor- en achternaam en hun foto zien
// sorteer de lijst op voornaam
// elke persoon op die lijst moet
// vrouw zijn
// ouder zijn dan 30 (1990 of ouder) return sortByCapriconWomen.age > 30 && sortByCapricornWomen.age < 40;
// een steenbok zijn (jarig van 22 december t/m 19 januari)

// }


// const sortOldCreditCards = () => {

// De creditcard van sommige mensen gaat verlopen, we gaan ze bellen om ze te waarschuwen.

// Maak een lijst van mensen:
// laat per persoon de volgende data zien
// voornaam, achternaam
// telefoonnummer
// creditcardnummer
// verloopdatum
// De lijst mag alleen volwassenen bevatten.
// De verloopdatum moet in de toekomst liggen (van dit jaar).
// De verloopdatum moet in het komende jaar liggen.
// Sorteer de lijst zodat de snelst verlopende creditcards bovenaan staan.

// }


// const mostPeople = () => {

// Maak een lijst van alle landen die voorkomen in de data.
// Achter elk land moet komen te staan hoeveel van de mensen in de lijst in dat land wonen.
// De lijst moet zo gesorteerd zijn dat de landen met de meeste mensen bovenaan staan.

// };


// const sortAverageAge = () => {

    // Als we op de knop voor deze opdracht drukken komt er een lijst met knoppen te staan.
    // De opdracht - knoppen blijven ook staan.
    // Elk van de nieuwe knoppen heeft als naam een land ("Nederland" bijvoorbeeld).
    // Als we dan op één van de landknoppen drukken zien we ergens
    // in de pagina een zin verschijnen met de tekst "De gemiddelde persoon in {land} is {jaar} oud".
    // Om die zin te kunnen laten zien moeten we de gemiddelde leeftijd voor dat land berekenen.
    // Rond de gemiddelde leeftijd af naar hele cijfers ( 18.4999 → 18 en 18.5 → 19).

// }


// const sortForMatchMaking = () => {

    // Als we op de knop voor deze opdracht drukken zien we een lijst van alle mensen.
    // de lijst is gesorteerd op voornaam
    // we willen alleen volwassenen zien
    // van elke persoon zien we:
    // voornaam, achternaam
    // foto
    // land
    // leeftijd
    // sterrenbeeld (Steenbok, Weegschaal etc)
    // Bij elke persoon zien we een knop met als titel "vind matches".
    // Als we op die knop drukken:
    // verdwijnt de grote lijst met mensen
    // zien we de aangeklikte persoon bovenaan staan
    // daaronder zien we een lijst van "matches" van die persoon
    // iemand mag niet met zichzelf matchen
    // Hoe bepalen we een match ?
    // Dat doen we op basis van sterrenbeeld.
    // Of mensen in een ander werelddeel wonen,
    // 30 jaar in leeftijd verschillen of niet elkaars taal spreken is niet belangrijk,
    // liefde overwint alle grenzen

// };