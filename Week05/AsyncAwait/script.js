function makeRequest (location) {
    return new Promise ((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if (location === 'Google') {
            resolve('Google says hi!');
        } else {
            reject('We can only talk to Google...');
        };
    });
};

function processRequest (response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra information + ${response}`);
    });
};

makeRequest('Google').then(response => { // Try Facebook instead of Google
    console.log('Response received');
    return processRequest(response);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(error => {
    console.log(error);
});