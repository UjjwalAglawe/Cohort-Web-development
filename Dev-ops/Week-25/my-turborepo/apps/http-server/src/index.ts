import express from "express";
// import * as express  from "express";
import { client } from "@repo/db/client";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await client.user.create({
            data: {
                username: username,
                password: password
            }
        });

        res.json({
            message: "User created successfully",
            id: user.id
        })

    } catch (e) {
        console.log(e);
        res.json({
            message: "ERROR...User creation failed",
            error: e
        })

    }

    // res.json({
    //     message: "User created"
    // });
})

app.listen(3002);