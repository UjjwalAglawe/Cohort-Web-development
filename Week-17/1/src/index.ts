import { Client } from "pg";


const pgClient=new Client("postgresql://neondb_owner:npg_ueLnt6YPk1iQ@ep-ancient-bird-a89p6olv-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");

// const pgClient2=new Client({
//     user:"neondb_user",
//     password: "neondb_password",
//     port:5432,
//     host:"neondb_host",
//     database:"neondb_database"
// })

async function main() {
    await pgClient.connect();

    const response=await pgClient.query("SELECT * FROM USERS");

    // to avoid injection
    // const insertquery="INSERT INTO users (username ,email,password) VALUES ($1,$2,$3)"
    // // const response3=await pgClient.query(insertquery,[username,email,password]);


    console.log(response.rows);

    // const response2=await pgClient.query("UPDATE users SET username='ujjwal2' WHERE id=12")
    
}

main();