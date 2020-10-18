const apiUrl = `https://wincacademydatabase.firebaseio.com/glenn/tasks.json`;


const getData = async () => {
    try {
        const res = await fetch(apiUrl, {
            method: "GET",
        });
        const result = await res.json();

        // console.log("Before (the raw result):", result);
        let tasks = Object.keys(result).map(key => ({
            id: key,
            description: result[key].description,
            done: result[key].done
        }));

        // console.log("After the tasks array", tasks);
// console.log("id", tasks[0].id)
        return tasks;
    } catch (error) {
        console.log("GET request", error);
    };
};



const sendData = async (data) => {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (error) {
        console.log("POST request", error);
    }
};



const updateData = async (id, descValue, doneValue) => {
    try {
        // console.log("id PUTData ", id);
        // console.log("typeof PUTData ", typeof id)
        const res = await fetch(`https://wincacademydatabase.firebaseio.com/glenn/tasks/${id}.json`, {
            method: "PUT",
            body: JSON.stringify({
                description: descValue,
                done: doneValue,
            }),
        });

        return await res.json();
    } catch (error) {
        console.log("PUT request", error);
    };
};



const deleteData = async (id) => {
    try {
        // console.log("id deleteData ", id);
        // console.log("typeof deleteData ", typeof id)
        const res = await fetch(`https://wincacademydatabase.firebaseio.com/glenn/tasks/${id}.json`, {
            method: "DELETE"
        });

        return res.json();
    } catch (error) {
        console.log("DELETE request", error);
    };
};