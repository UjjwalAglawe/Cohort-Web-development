const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET="helloujjwal";
const app = express();
app.use(express.json());

const users = [];

function getlogger(req,res,next)
{
    console.log(req.method,"request came");
    next();
    
}


app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/signup',getlogger, function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password,
    })

    res.json({
        message: "You are signed up",
    })

    console.log(users);

})

app.post('/signin',getlogger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
        const token=jwt.sign({
            username,
        },JWT_SECRET);

        res.json({
            token: token,
        })
    }
    else {
        res.status(403).send({
            message: "Incvalid username or password",
        })
    }
    console.log(users);
})



//way to pass data from middleware to the function is modifying request object

function auth(req,res,next)
{
    const token=req.headers.token;
    const decodedToken=jwt.verify(token,JWT_SECRET);
    if(decodedToken.username)
    {
        req.username=decodedToken.username;  //so the username is passed to next function
        next();
    }
    else{
        res.json({
            res:"You are not logged in"
        })
    }
}

app.get('/me',getlogger,auth,function(req,res){


    const currentUser=req.username;

    const foundUser = users.find((user) => user.username === currentUser);

    if(foundUser)
    {
        res.json({
            username:foundUser.username,
            password:foundUser.password,
        })
    }
    else{
        res.json({
            message:"Invalid Token"
        })
    }
})


app.listen(3000);