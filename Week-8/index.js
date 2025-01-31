require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
console.log(process.env.MONGO_URL);


const { userRouter } = require('./routes/users');
const { couseRouter } = require('./routes/courses');
const { adminRouter } = require('./routes/admin');

const app=express();
app.use(express.json());

app.use('/user',userRouter);  //all routes starting with /user
app.use('/course',couseRouter);//all routes starting with /course
app.use('/admin',adminRouter);


async function main(){
    await mongoose.connect(process.env.MONGO_URL);

    app.listen(3000);

    console.log("Listning to port 3000");
    
}

main();