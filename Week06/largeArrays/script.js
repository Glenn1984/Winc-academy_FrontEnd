const main = document.querySelector("main");
const allButtons = document.querySelectorAll("button");

// console.log(allButtons); // Log NodeList(6);


// const ul_Tag = document.createElement('ul');

// const databaseWithPersonData = (addClick) => {
//     const personDataWithLi = addClick.map((personData) => {
//         const li_Tag = document.createElement('li');
//         li_Tag.textContent = personData.region;
//         const result = ul_Tag.appendChild(li_Tag);
//         return result;
//     });
//         personDataWithLi.forEach((addToDom) => {
//         main.appendChild(ul_Tag).appendChild(addToDom);
//     });
// };

// databaseWithPersonData(randomPersonData);

//////////////////////////////////////////////////////////

function helperFunction(event) {
    const id = event.target.id;           //* informatie van buttons.
    const db = randomPersonData;          //* informatie uit database.
    const filter = getFilter(id);         //* filteren op specificatie.
    const result = db.filter(filter);     //? resultaat van filter uit database.
    console.log(`++${result}++`);         //! waarde = [object object].
    addFilterToDom(result);
};


function getFilter(id) {                    //* sortingMachine
    filterObject = {
        countryList: sortByCountryList,     //* waarde van button naar functie
        capricornWomen: sortByCapricornWomen,
        oldCreditCards: sortByOldCreditCards,
        mostPeople: sortByMostPeople,
        averageAge: sortByAverageAge,
        matchMaking: sortByMatchMaking,
    }
    return filterObject[id];
};

function addFilterToDom(id, result) { 
    console.log(`**${result}**`);             //! logt waarde (undefined), geen object.
    // console.log(`@@${id}@@`);              //* log werkt...
    // ?  create dom structure matching the result
    // ?  EG: countries only country names, persons full person records 
    // ?  loop over result, add dom structure with value of result
    // const ul_Tag = document.createElement('ul');
    // const li_Tag = document.createElement('li');
    // main.appendChild(ul_Tag).appendChild(li_Tag).textContent = result;
}

allButtons.forEach((buttons) => {
    buttons.addEventListener("click", helperFunction); /* //* start at line 25 */
});

const sortByCountryList = (filterByCountry) => {
    // console.log(filterByCountry)                   //* logt hele database
    console.log(filterByCountry.region);              //* logt hele database met regio
    const filteredCountries = filterByCountry.region;
    console.log(filteredCountries)                    //* logt alle landen.
    return filteredCountries;
};

const sortByCapricornWomen = (filterByCapricornWomen) => {
    console.log(filterByCapricornWomen);
};

const sortByOldCreditCards = (filterByOldCreditCards) => {
    console.log(filterByOldCreditCards);
};

const sortByMostPeople = (filterByMostPeople) => {
    console.log(filterByMostPeople);
};

const sortByAverageAge = (filterByAverageAge) => {
    console.log(filterByAverageAge);
};

const sortByMatchMaking = (filterByMatchMaking) => {
    console.log(filterByMatchMaking);
}


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

// const sortingMachine = (event) => {

// console.log(event.target) 

//         switch (event.target) {
//             case countryList: {
//                 sortCountryList(countryList);
//                 break;
//             }
//             case capricornWomen: {
//                 console.log(`Werkt het ? ${capricornWomen}`);
//                 break;
//             }
//             case oldCreditCards: {
//                 console.log('Het zal vast werken');
//                 break;
//             }
//             case mostPeople: {
//                 console.log("coffee");
//                 break;
//             }
//             case averageAge: {
//                 console.log('........');
//                 break;
//             }
//             case matchMaking: {
//                 console.log("genoeg");
//                 break;
//             }
//         default:
//             console.log("...Verkeerde button geklikt...");
//             break;
//     };
// };

// allButtons.forEach((buttons) => {
//         buttons.addEventListener("click", sortingMachine);
// });

// const sortCountryList = (sortByCountry) => {
//     // main.innerHTML = "";
//     const searchValue = randomPersonData.region;
//     console.log(searchValue)
    // const sortCountry = sortByCountry.sort(searchValue);
    // return databaseWithPersonData(sortCountry);
// };


// const sortCapricornWomen = (sortByCapricornWomen) => {
//     main.innerHTML = '';
//     const searchValue = sortByCapricornWomen;
//     const 

// const ul_Tag = document.createElement('ul');

// const databaseWithPersonData = (addClick) => {
//     const persons = addClick.map(personData => {
        // const personNames = [personData.name, personData.surname, personData.birthday.dmy];
        // console.log(personNames);
        // const source = personData.photo;
        // const target = "https://picsum.photos/";
        // const photos = Object.assign(target, source);
        // console.log(photos);
        // img_Tag.src = "https://picsum.photos/200";
    // });
    // const sortPersonName = addClick.sort((a, b) => a.name.localeCompare(b.name, "en"));
    // console.log(sortPersonName);

    // const sortPersonGender = addClick.filter(person => person.gender === 'female');
    // console.log(sortPersonGender)
    
    // const sortPersonByAge = addClick.filter(person => person.age > 29)
    // console.log(sortPersonByAge)
    // const sortPersonAge = addClick.filter(person => person.birthday)
    // console.log(sortPersonAge)
// };

// databaseWithPersonData(randomPersonData);



// Maak een lijst van mensen:
// laat voor- en achternaam  //* gedaan
// laat hun foto zien //? gelukt, nu nog voor elk persoon veranderen.
// sorteer de lijst op voornaam //* gedaan, sorteert op voornaam.
// elke persoon op die lijst moet vrouw zijn //* gedaan, sorteert op vrouwen.
// ouder zijn dan 30 (1990 of ouder) //* sorteert op 30 en ouder.
// een steenbok zijn (jarig van 22 december t/m 19 januari) 
// }




// const sortByOldCreditCards = (filterByOldCreditCards) => {
//     console.log(filterByOldCreditCards);

// const database = (addPerson) => {
    // const copyArray = addPerson.map(persons => {
    //     const result = [persons.name, persons.surname, persons.phone, persons.credit_card.number, persons.credit_card.expiration];
    //     return result;
    // })
    // console.log(copyArray);
//     const onlyAdults = addPerson.filter((arr, b) => {
//         return b = arr.credit_card.expiration > "9/20";
//     });
//     console.log(onlyAdults);
// };
// database(randomPersonData);

// laat per persoon de volgende data zien
// voornaam, achternaam //* gedaan
// telefoonnummer //* gedaan
// creditcardnummer //* gedaan
// verloopdatum //* gedaan

// De lijst mag alleen volwassenen bevatten. //? zijn allen ouder als 18
// De verloopdatum moet in de toekomst liggen (van dit jaar). //! lukt niet, is niet de juiste zoek-methode.
// De verloopdatum moet in het komende jaar liggen.
// Sorteer de lijst zodat de snelst verlopende creditcards bovenaan staan.





// const sortByMostPeople = (filterByMostPeople) => {
//     console.log(filterByMostPeople);

// const database = persons => {
//     const countries = persons.map(country => country.region);
//     console.log(countries);


// };
// database(randomPersonData);
// Maak een lijst van alle landen die voorkomen in de data. //* gedaan
// Achter elk land moet komen te staan hoeveel van de mensen in de lijst in dat land wonen.
// De lijst moet zo gesorteerd zijn dat de landen met de meeste mensen bovenaan staan.