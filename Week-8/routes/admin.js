const express=require('express');
const { Router } = require("express");
const { adminModel } = require("../db");
const { z, isAborted } = require("zod");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {JWT_ADMIN_PASSWORD}=require('../config');
const {adminMiddleWare}=require('../middleware/admin');
const {courseModel}=require('../db');
const adminRouter=Router();


const app=express();
app.use(express.json());



adminRouter.post("/signup",async function(req,res){

    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100),
        password: z.string().min(3).max(30),
    })

    const parsedDatawithSuccess = requiredBody.safeParse(req.body);
    console.log(parsedDatawithSuccess.success);
    console.log(parsedDatawithSuccess);
    console.log('Request Body:', req.body);


    if (!parsedDatawithSuccess.success) {
        res.json({
            message: "Incorect Format",
            errors: parsedDatawithSuccess.error.errors,
        })

        return;
    }

    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    let errroFound = false;
    try {
        const hashedPassword = await bcrypt.hash(password, 4);

        console.log(hashedPassword);

        await adminModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName,
        });

    }
    catch (e) {
        res.json({
            message: "Admin alredy exists"
        });
        errroFound = true;
    }

    if (!errroFound) {
        res.json({
            message: "You are signed up"
        })
    }
})

adminRouter.post("/signin",async function(req,res){
    const {email,password}=req.body;
    const admin=await adminModel.findOne({
        email:email,
    })

    if(!admin){
        res.status(403).json({
            message:"Admin not found"
        })
        return;
    }

    const passwordMatch=await bcrypt.compare(password,admin.password);

    if(passwordMatch){
        const token=jwt.sign({
            id:admin._id.toString(),
        },JWT_ADMIN_PASSWORD);


        //do cookie logic
        res.json({
            token
        })
    }
    else{
        res.status(403).json({
            message:"Invalid Credentials"
        });
        return;
    }

    // res.json({
    //     message: "You are signed in"
    // })
})

adminRouter.post("/course",adminMiddleWare,async function(req,res){
    const adminId=req.userId;
    const {title,description,imageUrl,price}=req.body;

    const course=await courseModel.create({
        title:title,
        desciption:description,
        price:price,
        imageUrl:imageUrl,
        creatorId:adminId
    })


    res.json({
        message:"Course Created",
        courseId:course._id
    })
})

// to upldate the course details

adminRouter.put("/course",adminMiddleWare,async function(req,res){
    const adminId=req.userId;
    const {title,description,imageUrl,price,courseId}=req.body;

    //update course where id=courseId and creatorId:adminId
    const course=await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        desciption:description,
        price:price,
        imageUrl:imageUrl,
    })
    
    res.json({
        message:"Course Details updated"
    })
})

adminRouter.get('/course/bulk',adminMiddleWare,async function(req,res){
    const adminId=req.userId;

    const courses=await courseModel.find({
        creatorId:adminId
    })
    
    res.json({
        message:"All coruses are",
        courses
    })
})




module.exports={
    adminRouter:adminRouter
}