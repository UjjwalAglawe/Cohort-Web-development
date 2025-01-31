const fs=require("fs");

const contents=fs.readFileSync("2.txt","utf-8"); //wihtout utf it returns array of byte
//utf is way to encoding for human redable format

//readFileSync is synchronus
//readFile is asynchronus

const contents2=fs.readFileSync("2.txt","utf-8"); 
console.log(contents);

