// import chalk from "chalk";
const { Command } = require("commander");
const fs=require("fs")

// function sum(a,b)
// {
//     return a+b;
// }


// console.log(sum(2,3));
// console.log(chalk.blue("Hello "));
// console.log(chalk.red.bold("Hello "));

const program=new Command;

program
.name("File reader")
.description("To do file based tasks")
.version("0.8.0")

program.command("count")
.description("To count the words of the file")
.argument("<file>",'file to count')
.action((file)=>{
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            let words=0;
            for(let i=0;i<data.length;i++)
            {
                if(data[i]===" ")
                {
                    words++;
                }
            }
            console.log("The number of words are ",words+1);
            
        }
    });
})

program.parse();


