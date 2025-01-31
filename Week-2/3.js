
function timeout()
{
    console.log("Timeout Function");
}

console.log("hi");

setTimeout(timeout,1000);

console.log("welcome");


let c=0;


//for loop will complete first becouse the thread is not free
//the cpu extensive task will get complete firsst i.r for loop then timeout function will run
//treadmill for 30min example
for(let i=0;i<1000000000;i++)
{
    c++;
}

console.log("For loop done",c);

