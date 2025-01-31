
interface User{
    firstName: string,
    age: number
}

function greet(user: User){   //greet takes user paremeter of type User(custom)

}


type sums=number| string;  //type lets you define this or this 

function to (a: sums,b:sums)
{

}

//we can do union , intersection of types

type Employee={
    name:string,
    age: number
}

type Manager={
    name:string,
    position?: string,  // ? for  making it optional
    joinDate: string,
    address?:{
        city:string,
        pincode:string,
    }  //address is optional but if inserted then city and pincode is cumpulsory
}

type TeamLead=Employee & Manager;  //cannot do such in interfaces

//teamLead will create as 
// type TeamLead={
//     name:string,
//     age: number,
//     position: string,
//     joinDate: string
// }

//INterface can use another interface

type Manager2={
    name:string,
    position?: string,  // ? for  making it optional
    joinDate: string,
    user:User, //using naother interface
}
/**************************************************************** */
interface People{
    name:string,
    age:number,
    greet: ()=> string,  //this is a function that does not have parameters and returns string
    // or greet():string,
}

// Implementing objects using interface

let person:People={
    name:"Ujjwal",
    age:21,
    greet:()=>{
        return "Hi";
    },
};

let greeting=person.greet();
console.log(greeting);

// Implementing classes using interface

interface People2{
    name:string,
    age:number,
    isLegal(): boolean,
}


class Boss implements People2{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    isLegal() {
        return this.age>18;
    }
}

let newPerson=new Boss("Jhon",25);
console.log(newPerson.isLegal());

//Main diffrence between interface and Types is Interface can be used to implement Classes
//Types can do union and intersection

//Abstract class is same as Interface
// diffrence is Abstract class can have default implemention but interface cannot 