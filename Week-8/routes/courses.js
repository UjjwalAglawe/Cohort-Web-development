const { Router } = require("express");
const { userMiddleWare } = require("../middleware/user");
const {purchaseModel, courseModel}=require('../db')


const couseRouter=Router();

couseRouter.post('/purchase',userMiddleWare,async function(req,res){

    const userId=req.userId;
    const courseId=req.body.courseId;

    // Task : check if alredy purchesed
    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"You have succesfully bought the course"
    })
})

couseRouter.get('/preview',async function(req,res){

    const courses=await courseModel.find({}); 

    res.json({
        courses
    })
})

module.exports={
    couseRouter: couseRouter
}