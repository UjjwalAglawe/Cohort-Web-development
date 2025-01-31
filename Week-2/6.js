function main()
{
    console.log("Hello");
}

setTimeout(main, 3000); // call back the main function------CALLBACK
//__________________________________________________________________________________________________________________


function promiseFn(resolve) {
    let c = 0;
    for (let i = 0; i < 100000000; i++) {
        c++;
    }
    resolve("hi there ujjwal");
}

const p = new Promise(promiseFn);

function callback(str) { //can get parameters passed in resolve as arguments in cpp
    console.log(str);
}

p.then(callback);


//__________________________________________________________________________________________________________________

function setTimeoutPromise(ms)
{
    return new Promise(resolve => setTimeout(resolve,ms));
}

function print()
{
    console.log("After 3 seconds");
}

// setTimeout(main, 3000);                   //callback version
setTimeoutPromise(3000).then(print);         // Promisified version

