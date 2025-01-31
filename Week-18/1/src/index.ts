import { PrismaClient } from "@prisma/client";
import express from "express";


const app=express();

const client=new PrismaClient();

app.get("/users",async (req,res)=>{
    const users=await client.user.findMany();

    res.json({
        users
    })
})

app.get("/todos/:id",async (req,res)=>{

    const id=req.params.id;

    const users=await client.user.findFirst({
        where:{
            id:parseInt(id)
        },
        select:{
            todos:true,
            username:true,
            password:true,
        }
    })

    res.json({
        users
    })
})

app.listen(3000);
async function createUser() {
    // await client.user.create({
    //     data: {
    //         username: "John Doe",
    //         password: "121512",
    //         age: 21,
    //         city:"Pune"
    //     }
    // })

    // await client.user.delete({
    //     where:{
    //         id=1
    //     }
    // })

    const user=await client.user.findFirst({
        where:{
            id:1
        },
        include:{
            todos:true
        }
    })

    console.log(user);
}

// createUser();