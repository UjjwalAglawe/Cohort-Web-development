import { WebSocketServer } from "ws";

const wss=new WebSocketServer({port:8080})

//Whenever the connection request comes run this function
//Event Handler


wss.on("connection",function(socket){
    console.log("new client connected")
   
    socket.on("message",(e)=>{
        if(e.toString()==="ping"){
            socket.send("pong");
        }
        
    })
})