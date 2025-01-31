const express=require('express')    //express is chain of middlewares
const app=express()

app.get('/',(req,res)=>{
    res.send("helloa")
});

let requestCount=0;
function reqIncreaser(req,res,next)    //this is middleware therefore is in the middle arg of line 27
{
    requestCount+=1;
    console.log("The number of request is ",requestCount);
    next();   //This next is use to call the next function in line 27 that is sum handler
    //If next is not called then sumHandler will not get called
}


function sumHandler(req,res)
{   //main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    
    res.json({
        ans:a+b
    })
}
app.get('/add',reqIncreaser,sumHandler);  //requestincreser is the middleware



// if we use 
// app.use(reqIncreaser)  //Global middleware all the reoutes after this will get the middleware automatically
//app.get('/multiply',mulHandler);  
//the code above this app.use will not get global middleware

app.get('/multiply',function(req,res){
    reqIncreaser();

    const a = req.query.a;
    const b = req.query.b;
    
    res.json({
        ans:a*b
    })
})


app.listen(3000)



// app.get('/sub',function(req,res){
//     const a = req.query.a;
//     const b = req.query.b;
    
//     res.json({
//         ans:a-b
//     })
// })

// localhost:300/add/30/20
// app.get('/add/:a/:b',function(req,res){
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);

//     res.json({
//         ans:a+b
//     })
    
// })