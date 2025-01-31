"use strict";
function sumAge(user1, user2) {
    return (user1.age + user2.age);
}
const age = sumAge({ name: "Ujjwal", age: 21 }, { name: "Mohit", age: 22 });
console.log(age);
