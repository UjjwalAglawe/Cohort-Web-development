// A Promise in JavaScript is an object that represents the eventual completion 
//(or failure) of an asynchronous operation and its resulting value.
// promises


//__________________________________________________________________________________________________________________

function waitFor3Sec(resolve)
{
    setTimeout(resolve,3000);
}

function setTimeoutPromise()
{
    return new Promise(waitFor3Sec);    //whatever the 1st argument is passed in this Promise() it will call the here waitFor3sec 
    // the first arg of that here first arg of Promise() is waitFor3sec then the first arg of waitFor3sec is resolve when this is solved then 
    // the .then(func) this function is called on line 25
}

function main()
{
    console.log("Hello");
}

setTimeoutPromise().then(main);