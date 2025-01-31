// interface User{
//     name:string,
//     age:number
// }

// function sumAge(user1:User,user2:User)
// {
//     return (user1.age+user2.age);
// }

// const age=sumAge({name:"Ujjwal",age:21},{name:"Mohit",age:22});
// console.log(age);


interface User {
    name: string,
    age: number,
    phone: string,
    city: string,
    id: number,
    email: string,
}


/*-------------PICK -------------------------*/
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;  //only taking values to be changed and passing

/*-------------PARTIAL -------------------------*/
type UpdatePropsOptional = Partial<UpdateProps>  //all values are optinal

function updateUser(UpdatedProps: UpdateProps) {
    //hit database to update user
}
function updateUserOptinal(UpdatedProps: UpdatePropsOptional) {

}

updateUser({ name: "ujjwal", age: 22, email: "asd" }) //needs all three as noone is optinal
updateUserOptinal({ name: "ujjwal" }) //does not needs all three as it is optional

/*-------------READ-ONLY-------------------------*/

interface Student {
    name: string;
    readonly age: number;
}

const stud: Student = {
    name: "ujss",
    age: 55,
}

// stud.age=22; //can update like this if not read only
//if readonly it will give error

const stud2: Readonly<Student> = {  //to make whole obj Read-only dont have to write readonly again and agin
    name: "ujss",
    age: 55,
}

//used in intializing api keys etc 


/*-------------RECORD AND MAP-------------------------*/
//TO CREATE KEY_VALUE PAIRS

type Users = Record<string, number> //users is the record with string as key and value is number

const users: Users = {
    "rv@345": 21,
    "rs@345": 25,
}

//------------MAP--------------  
//ussed map

const users2=new Map();

// const users2=new Map<string,User>();

// const users2=new Map<string,number>();

users2.set("roll40",21);
// users2.set("asd345",{name:"Ujwja",age:21});

const user=users2.get("roll40");



/*--------------EXCLUDE-------------------------*/
// opposite of pick
// in pick we specify which value to take in exclude we spicfy which value to exclude

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK





/*--------------Type inference in zod-------------------------*/
// in zod.ts


import z from "Zod"

const StringZodSchema=z.string();
type StringZodType=z.infer<typeof StringZodSchema>; //string
