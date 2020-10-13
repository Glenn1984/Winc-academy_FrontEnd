const getData = async () => { //! getData
    try {
        const apiUrl = `https://wincacademydatabase.firebaseio.com/glenn/tasks.json`;
        const res = await fetch(apiUrl, { method: "GET" })
        // console.log("GetData test inside func", res); //* 200 OK

        return await res.json();
    } catch (error) {
        console.log(error);
    };
};

// console.log("Line 13 - Get Data", getData()); //* Promise fullfilled.



const conversion = async () => { //! conversion
    const result = await getData();
    // console.log("Line 18 log of result", result); //* Object

    let tasks = Object.keys(result).map(key => ({
        id: key,
        description: result[key].description,
        done: result[key].done,
    }));
    // console.log("Line 25 - tasks array", tasks); //* Objects with id, desc and boolean.
    return tasks;
};

// console.log("Line 29 - Conversion Data", conversion()); //* Objects  with id, desc and boolean.



const sendData = async (data = {}) => { //! sendData
    const apiUrl = `https://wincacademydatabase.firebaseio.com/glenn/tasks.json`;
    const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
    });
    // console.log("sendData test", res); //* 200 OK
    return res.json();
};

// console.log("Line 41 - Send Data", sendData()); //* Promise fullfilled



const putData = async (id, descValue, doneValue) => { //! putData
    const apiUrl = `https://wincacademydatabase.firebaseio.com/glenn/tasks/${id}.json`;
    const res = await fetch(apiUrl, {
        method: "PUT",
        body: JSON.stringify({
            id: id,
            description: descValue,
            done: doneValue,
        })
    })
        .catch(error => console.log(error));
    
    //! Stuur de vernieuwing en haal de vernieuwing op en plaats in de dom.
    await addToDo(); //? checkData - update boolean true/false.
    return res.json();
};

console.log("Line 62 - Put Data", putData());



const deleteData = async (id) => { //! deleteData
    const apiUrl = `https://wincacademydatabase.firebaseio.com/glenn/tasks/${id}.json`;
    const res = await fetch(apiUrl, {
        method: "DELETE",
        body: JSON.stringify({
            id: id,
        })
    })
        .catch(error => console.log(error));
    
    //! Welke waarde wil ik meegeven de functie in ? id.
    deleteToDo({id: id}); //? verkrijg id om te verwijderen.

    return res.json();
};

// console.log("Line 76 - Delete Data", deleteData());



const deleteAllData = async () => { //! deleteAllData
    const apiUrl = `https://wincacademydatabase.firebaseio.com/glenn/tasks.json`;
    const res = await fetch(apiUrl, { method: "DELETE" });

    //! Welke waarde wil ik meegeven de functie in ? alle id's.
    getClearAll(); //? verkrijg alle id's om te verwijderen.

    return res.json();
};
