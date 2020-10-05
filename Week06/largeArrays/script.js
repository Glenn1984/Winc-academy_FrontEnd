//! Database is a clone. /randomPersonData...

const listOfResults = document.querySelector("#resultList");
const countryListButton = document.querySelector("#countries");
const capricornWomenButton = document.querySelector("#capricornWomen");
const oldCreditCardsButton = document.querySelector("#oldCreditCards");
const mostPeopleButton = document.querySelector("#mostPeople");
const averageAgeButton = document.querySelector("#averageAge");
const matchMakingButton = document.querySelector("#matchMaking");

// console.log(listOfResults,"\n", countryListButton,"\n", capricornWomenButton,"\n", oldCreditCardsButton,"\n", mostPeopleButton,"\n", averageAgeButton,"\n", matchMakingButton); //* Works perfectly!



//* Country list

const getCountryList = () => {
    listOfResults.innerHTML = "";
    const getCountries = randomPersonData
        .sort((sortCountryA, sortCountryB) => sortCountryA.region.localeCompare(sortCountryB.region, "en"))
        .map(countries => countries.region);
    
    getCountries.forEach(countries => {
        const li_Tag = document.createElement("li");
        listOfResults.appendChild(li_Tag);
        li_Tag.innerHTML += countries;
    });
};

countryListButton.addEventListener("click", getCountryList);


//* Capricornwomen

const getCarpicornWomenList = () => {
    listOfResults.innerHTML = "";
    const capricornWomensWithPhoto = randomPersonData
        .filter(person => person.gender === "female") //* result 89 female persons.
        .filter(person => person.age >= 30) //* result 44 female persons 30 years old and older.
        .sort((personA, personB) => personA.name.localeCompare(personB.name, "es")) //* sort: Espania, because it is better/more sorted.
        .filter((capricorn) => {
            if (capricorn.birthday.mdy.split("/", 1) == "12" &&
                capricorn.birthday.dmy.split("/", 1) >= "22" ||
                capricorn.birthday.mdy.split("/", 1) == "01" &&
                capricorn.birthday.dmy.split("/", 1) <= "19") {
                return capricorn;
            };
        })                                      //* result 4 Capricorn female persons.
        .map(person => `Name: ${person.name} Surname: ${person.surname}`);
    
    // console.log(capricornWomensWithPhoto)      //* Complete result.

    capricornWomensWithPhoto.forEach(personNames => {
        const li_Tag = document.createElement("li");
        const img_Tag = document.createElement("img");
        img_Tag.src = 'https://picsum.photos/200';
        li_Tag.innerHTML += personNames;
        listOfResults.appendChild(li_Tag).appendChild(img_Tag);
    });
};

capricornWomenButton.addEventListener("click", getCarpicornWomenList);


//* Old credit-cards

const getListOfPeopleWithExpiredCreditCards = () => {
    listOfResults.innerHTML = "";

    const listofPeopleWithExpiredCreditCards = randomPersonData
        .filter(person => person.age >= 18)
        .filter((expiredCreditCard) => {
            const dateThisYear = new Date().getFullYear(); //* 2020.
            const dateNextYear = new Date().getFullYear() - 1999; //* 21.
            const expirationDate = expiredCreditCard.credit_card.expiration.split("/");
            if (expirationDate[1] == dateThisYear || expirationDate[1] == dateNextYear) {
                return expiredCreditCard;
            };
        })
        .sort((expirationDateOne, expirationDateTwo) => expirationDateOne.credit_card.expiration.split("/")[0] - expirationDateTwo.credit_card.expiration.split("/")[0])
        .map(person => `
            Name: ${person.name}
            Surname: ${person.surname}
            Phone-number: ${person.phone}
            Creditcard-number: ${person.credit_card.number}
            Expiration date: ${person.credit_card.expiration}`);
        
    listofPeopleWithExpiredCreditCards.forEach(personInfo => {
        const li_Tag = document.createElement("li");
        li_Tag.innerHTML += personInfo;
        listOfResults.appendChild(li_Tag);
    });
};

oldCreditCardsButton.addEventListener("click", getListOfPeopleWithExpiredCreditCards);




// * Most people

const getListOfMostPeopleEachCountry = () => {
    listOfResults.innerHTML = "";
    
    const getCountriesWithMostPeople = randomPersonData
        .map(countries => countries.region)
        .reduce((countryResult, countries) => {
            let count = countryResult[countries];
            countryResult[countries] = count === undefined ? 1 : ++count;
            return countryResult;
        }, {}); //* result is now an object
    
    const hasCountriesWithMostPeople = Object.entries(getCountriesWithMostPeople);
    //* returns an array with given result.
    hasCountriesWithMostPeople.sort((countryA, countryB) => countryB[1] - countryA[1])
        .forEach(countries => {
            const li_Tag = document.createElement("li");
            listOfResults.appendChild(li_Tag);
            li_Tag.innerHTML += countries;
        });
};

mostPeopleButton.addEventListener("click", getListOfMostPeopleEachCountry);




//* Average age

const getAListOfAverageAge = () => {
    listOfResults.innerHTML = "";

    const getArrayOfCountries = randomPersonData.map(countries => countries.region);
    const hasCountries = [...new Set(getArrayOfCountries)]; //* deletes doubles.
    
    hasCountries.sort((countryA, countryB) => countryA.localeCompare(countryB, "en"))
        .forEach(countries => {
            const li_Tag = document.createElement("li");
            const countryButton = document.createElement("button");
            const paragraph = document.createElement("p");
            countryButton.className = countries;
            listOfResults.appendChild(li_Tag).appendChild(countryButton)
            listOfResults.appendChild(li_Tag).appendChild(paragraph);
            countryButton.innerHTML += countries;
            // li_Tag.innerHTML += `De gemiddelde persoon`;
            paragraph.innerHTML += `De gemiddelde persoon`;
        });
    
    const getAverageAge = (event) => {
        let events = event.target.className;
        console.log(events);
            const getPersonInfo = randomPersonData
                .map(country => country.region)
                .reduce((countryResult, countries) => {
                    let count = countryResult[countries];
                    countryResult[countries] = count === undefined ? 1 : ++count;
                    return countryResult;
                }, {});
        // if (events == getPersonInfo) {
        //     return getPersonInfo;
        // }
        const hasCountries = Object.entries(getPersonInfo);
        const result = hasCountries.toString();
        console.log(result)
        hasCountries.filter(element => console.log(events === element.toString()));
        
                // .forEach(countries => {
                //     const li_Tag = document.createElement("li");
                //     listOfResults.appendChild(li_Tag);
                //     li_Tag.innerHTML += countries;
                // });
            // console.log(getPersonInfo) //* alle landen + leeftijd
    };
    
        const allButtons = document.querySelectorAll("button");
    
        allButtons.forEach(button => button.addEventListener("click", getAverageAge));
        
        
    
    
    //? target de juiste button
    //? Voer de berekening uit
    //? Stuur de berekening terug incl string.
    //? Print op scherm.
    //? Als je op een knop drukt krijg je als resultaat "De gemiddelde persoon in {land} is {jaar} oud".
};

averageAgeButton.addEventListener("click", getAListOfAverageAge);


// OK, deze is een stukje complexer.
// Als we dan op één van de landknoppen drukken zien we ergens in de pagina een zin verschijnen met de tekst "De gemiddelde persoon in {land} is {jaar} oud".
// Om die zin te kunnen laten zien moeten we de gemiddelde leeftijd voor dat land berekenen.
// Rond de gemiddelde leeftijd af naar hele cijfers ( 18.4999 → 18 en 18.5 → 19).




// Subopdracht: matchmaking
// Deze opdracht is het moeilijkst.
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
// Hoe bepalen we een match? Dat doen we op basis van sterrenbeeld. Of mensen in een ander werelddeel wonen, 30 jaar in leeftijd verschillen of niet elkaars taal spreken is niet belangrijk, liefde overwint alle grenzen ;-)
// Hoe bepalen we welk sterrenbeeld iemand is? Doe dat met deze informatie.
// En we gaan alleen voor de "Great Match".



//////////////////////////////////////////////////////////

// const helperFunction = (event) => {
//     const id = event.target.id;              //* informatie van buttons.
//     const db = randomPersonData;             //* informatie uit database.
//     const filter = getFilter(id, db);            //* filteren op specificatie.
//     console.log(`++${filter}++`);                     //? logt sortByCountryList-functie.
    // const result = db.filter(filter);        //? resultaat van filter uit database.
    // console.log(JSON.stringify(result));  //? logt hele database, inplaats van gefilterde resultaat.
    // addFilterToDom(result);
// };


// const getFilter = (id, db) => {                 //* sortingMachine
//     const sortByCountryList = (filterByCountry) => {
//         console.log(`--${filterByCountry}--`);
//     };

//     filterObject = {
//         countryList: sortByCountryList(),     //* waarde van button naar functie
//         capricornWomen: sortByCapricornWomen,
//         oldCreditCards: sortByOldCreditCards,
//         mostPeople: sortByMostPeople,
//         averageAge: sortByAverageAge,
//         matchMaking: sortByMatchMaking,
//     }
//     return filterObject[id];
// };

// const addFilterToDom = (id, result) => {
    // console.log(JSON.stringify(result));   //! logt waarde (undefined), geen object.
    // console.log(JSON.stringify(id));          //! logt volledige db.
    // ?  create dom structure matching the result
    // ?  EG: countries only country names, persons full person records 
    // ?  loop over result, add dom structure with value of result
    // const ul_Tag = document.createElement('ul');
    // const li_Tag = document.createElement('li');
    // main.appendChild(ul_Tag).appendChild(li_Tag).textContent = result;
// };

// allButtons.forEach((button) => {
//     button.addEventListener("click", helperFunction); /* //* start at line 25 */
// });

// const sortByCountryList = (filterByCountry) => {
//     console.log(`--${filterByCountry.name}--`);
// };

// const sortByCapricornWomen = (filterByCapricornWomen) => {
//     console.log(filterByCapricornWomen);
// };

// const sortByOldCreditCards = (filterByOldCreditCards) => {
//     console.log(filterByOldCreditCards);
// };

// const sortByMostPeople = (filterByMostPeople) => {
//     console.log(filterByMostPeople);
// };

// const sortByAverageAge = (filterByAverageAge) => {
//     console.log(filterByAverageAge);
// };

// const sortByMatchMaking = (filterByMatchMaking) => {
//     console.log(filterByMatchMaking);
// };


////////////////////////////////////////////////////////////////////


//? function click(event) {
//?     id := event.target.id
//?     db := getRandomUsers()
//?     filter := getFilter()
//?     result := db.filter(filter)
//?     addResultToDom(id,result)
//?   } 
//?   function getFilter(id) { // nu nog je sorting machine
//?     filters = {
//?        a := filterA
//?        b := filterB
//?     }
//?     return filters[id]
//?   }
//?   function addFilterToDom(id, result) {
//? create dom structure matching the result
//? EG: countries only country names, persons full person records 
//? loop over result, add dom structure with value of result
//?   }



//////////////////////////////////////////////////////////////////////////////