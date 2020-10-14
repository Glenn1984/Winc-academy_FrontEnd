const apiUrl = `https://wincacademydatabase.firebaseio.com/glenn/tasks.json`;



//? POST

const sendData = async (data) => {
    await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
    });
};



//? GET

const getData = async () => {
    try {
        const res = await fetch(apiUrl, { method: "GET" })

        return await res.json();
    } catch (error){
        console.log(error);
    }
};



//? Data Conversion

const dataConversion = async () => {
    const result = await getData();

    let tasks = Object.keys(result).map(key => ({
        id: key,
        description: result[key].description,
        done: result[key].done,
    }));
    return tasks;
};



//? PUT

const putData = async (id, descValue, doneValue) => {
    const res = await fetch(apiUrl, {
        method: "PUT",
        body: JSON.stringify({
            id: id,
            description: descValue,
            done: doneValue,
        })
    });
    return res.json();
};



//? DELETE

const deleteData = async (id) => {
    const res = await fetch(apiUrl, {
        method: "DELETE",
        body: JSON.stringify({
            id: id,
        })
    });
};



//? DELETE all Data.

const deleteAllData = async (id) => {
    await fetch(apiUrl, {
        method: "DELETE",
        body: JSON.stringify({
            id: id,
        })
    });
};