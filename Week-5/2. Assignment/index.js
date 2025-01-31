const express=require('express')
const app=express();


app.get('/',(req,res)=>{
    res.send("helloa")
});

function logger(req,res,next)
{
    console.log("The method is ",req.method);
    console.log("The url is ",req.url);
    console.log("The Host  is ",req.hostname);
    console.log(Date());
    next();
}


function realSumHandler(req,res)
{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:a+b
    })
}
// app.get('/add',logger,realSumHandler);

app.use(logger);
app.get('/add',realSumHandler);


// localhost:300/add/30/20
app.get('/add/:a/:b',function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans:a+b
    })
    
})

app.get('/multiply',function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans:a*b
    })
})

app.get('/sub',function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans:a-b
    })
})

app.listen(3000)