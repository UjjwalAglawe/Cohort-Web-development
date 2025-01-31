const express=require('express')
// const bodyParser = require('body-parser');
const app=express()
// app.use(bodyParser);

app.get('/',(req,res)=>{
    res.send("helloa")
});

// app.get('/',function(req,res){
//     res.send('id: ' + req.query.id)
//     const queryTerm = req.query.query;
//     const category = req.query.category;
//     console.log(queryTerm);
    
// })

app.get('/add',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:a+b
    })
    
})


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