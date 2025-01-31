const express=require("express");
const {UserModel,TodoModel}=require("./db");
const jwt=require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const bcrypt=require("bcrypt");

JWT_SECRECT="ujjwalag";

mongoose.connect("mongodb+srv://tsukuyomi0055:JgfzResHDxh4cSeg@cluster0.cmp6v.mongodb.net/todo-app");

const app=express();
app.use(express.json());


app.post('/signup',async function(req,res){
    const email= req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    const hashedPassword=await bcrypt.hash(password,4);
    console.log(hashedPassword);
    
    await UserModel.create({
        email:email,
        password:hashedPassword,
        name:name
    })

    res.json({
        message: "You are signed up"
    })
});

app.post('/signin',async function(req,res){
    const email= req.body.email;
    const password=req.body.password;

    const user=await UserModel.findOne({
        email:email,
        // password:password,
    });

    if(!user){
        res.status(403).json({
            message:"User not found"
        })
        return;
    }

    const passwordMatch=await bcrypt.compare(password,user.password);   
    // bcrypt.compare will automatically fetch the required info from 
    // hashed password that is no. of round etc and run on given password and compare given db hased passord 
    console.log(user);

    if(passwordMatch){
        const token=jwt.sign({
            id:user._id.toString(),
        },JWT_SECRECT);


        res.json({
            token
        })
    }
    else{
        res.status(403).json({
            message:"Incorrect Credentials"
        });
    }
    // if(user){
    //     const token=jwt.sign({
    //         id:user._id.toString(),
    //     },JWT_SECRECT);


    //     res.json({
    //         token
    //     })
    // }
    // else{
    //     res.status(403).json({
    //         message:"Incorrect Credentials"
    //     });
    // }
});

function auth(req,res,next)
{
    const token=req.headers.token;

    const decodedData=jwt.verify(token,JWT_SECRECT);

    if(decodedData)
    {
        req.userId=decodedData.id;
        next();
    }
    else{
        res.status(403).json({
            message:"Wrong Credentials"
        })
    }
}
app.post('/todo',auth,async function(req,res){

    const title=req.body.title;
    const done=req.body.done;
    const userId=req.userId;

    await TodoModel.create({
        done:done,
        title:title,
        userId:userId,
    })

    res.json({
        message:"Todo created"
    })

});

app.get('/todos',auth,async function(req,res){

    const userId=req.userId;

    const todos=await TodoModel.find({
        userId
    })

    
    res.json({
        todos
    })
});

app.listen(3000);