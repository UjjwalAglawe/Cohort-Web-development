const fs=require("fs");

// var contents;
// function readTheFile(resolve)
// {
//     contents=fs.readFileSync("2.txt","utf-8"); 
//     resolve(contents);

// }
// const p=new Promise(readTheFile)


// function print(contents)
// {
//     console.log("This are the contents" , contents);
    
// }
// p.then(print);


function readTheFile(sendTheFinalValueHere)
{
    fs.readFile("2.txt","utf-8",function(err,data){
        sendTheFinalValueHere(data);
    })
}

function readFile(fileName)
{
    return new Promise(readTheFile);
}

const p =readFile();

function callback(contents)
{
    console.log(contents);
    
}

p.then(callback);