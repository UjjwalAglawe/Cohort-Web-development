import { PrismaClient } from "@prisma/client";

const express = require("express")

const app = express();
const prismaClient=new PrismaClient();

// @ts-ignore
app.get("/", async (req, res) => {
    const data=await prismaClient.user.findMany();

    res.send({
        message: "Hello Get end point",
        data:data
    })
});


// @ts-ignore
app.post("/",async (req,res)=>{

    await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    });

    res.send({
        message: "Hello Post end point"
    })
})

app.listen(3000);