fetch("<http://swapi.co/api/people/1/>") // Request
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error);
    });