// How to create / reform an Object...

const countries = {
    "US": 120,
    "Vietnam": 1,
    "Turkey": 4,
      "Tunisia": 1,
      "Nederland": 34,
    "Germany": 10
  }
  let countriesArray = [];
  for (const property in countries) {
      let countryObject = {
          name: property,
          population: countries[property]
      }
      countriesArray.push(countryObject);
  }
  countriesArray.sort((first, second) => {
      if (first.population > second.population) return -1
      if (first.population < second.population) return 1
      return 0;
  })
  countriesArray.forEach((country) => {
      console.log(country);
      countryText.innerText += country.name;
      populationText.innerText += country.population;
  });