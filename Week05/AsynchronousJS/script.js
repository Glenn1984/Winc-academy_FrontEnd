let a3 = 100;
setTimeout(function () { a3++; }, 0);
console.log(a3); // als eerste uitgevoerd.....
setTimeout(() => { console.log(a3) }, 0); // Als vierde uitgevoerd.....

let p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Yo!"); // Als vijfde uitgevoerd....
    }, 0);
});
console.log(p); // Als tweede uitgevoerd.....
setTimeout(function () {
    console.log(p); // Als zevende uitgevoerd....
}, 10);
console.log(p); // Als derde uitgevoerd.....

p.then(function (val) {
    console.log(val); // Als zesde uitgevoerd.....
});


/**
All Asynchronous JS
setTimeout, callbacks for geolocation, Promises,
fetch, ajax, filesystem interaction, database calls,
even DOM event listeners
 **/