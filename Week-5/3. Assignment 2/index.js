const express=require('express')
const app=express();


app.get('/',(req,res)=>{
    res.send("helloa")
});

app.use(express.json());

function realSumHandler(req,res)
{
    console.log(req.body);
    
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans:a+b
    })
}

app.post('/add',realSumHandler);



app.listen(3000)