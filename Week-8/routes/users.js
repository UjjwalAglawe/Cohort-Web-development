const { Router } = require("express")
const { z } = require("zod");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { userModel, purchaseModel, courseModel } = require("../db");
const { JWT_USER_PASSWORD } = require('../config');

const express = require('express');
const { userMiddleWare } = require("../middleware/user");



const app = express();
app.use(express.json());

const userRouter = Router();


userRouter.post('/signup', async function (req, res) {
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

        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName,
        });

    }
    catch (e) {
        res.json({
            message: "User alredy exists"
        });
        errroFound = true;
    }

    if (!errroFound) {
        res.json({
            message: "You are signed up"
        })
    }

})

userRouter.post('/signin', async function (req, res) {

    const { email, password } = req.body;
    const user = await userModel.findOne({
        email: email,
    })

    if (!user) {
        res.status(403).json({
            message: "User not found"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString(),
        }, JWT_USER_PASSWORD);


        //do cookie logic
        res.json({
            token
        })
        return;
    }
    else {
        res.status(403).json({
            message: "Invalid Credentials"
        });
    }


    res.json({
        message: "You are signed in"
    })
})

userRouter.get('/purchase', userMiddleWare, async function (req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    });

    console.log(purchases);
    
    const courseData = await courseModel.find({
        _id: { $in: purchases.map(x => x.courseId) }
    })
    
    console.log(courseData);

    res.json({
        purchases,
        courseData
    })
})


module.exports = {
    userRouter: userRouter
}