"use strict";
let x = 1;
console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
//returns a number
function sum(num1, num2) {
    // console.log(num1+num2);
    return (num1 + num2);
}
// if we dont write anything it implecitley consider return type as number as we are adding 2 nmbers
// function sum(num1:number,num2: number)
// {
//     return (num1+num2);
// }
greet("Ujjwal");
let ans = sum(4, 5); //implicitey ans in number type as it store the value return by the function sum which returns a number
console.log(ans);
//function that takes another function as input and runs after 1 sec
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
// function delayedCallInt(fn:()=>number)  //number means a passed function does not returns
// {
//     setTimeout(fn,1000);
// }
delayedCall(function () {
    console.log("Delayed called function");
});
// delayedCallInt(function(){
//     return 5;
// });
