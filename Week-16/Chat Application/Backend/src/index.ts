import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
interface User{
    socket:WebSocket;
    room:string;
}
let allSockets: User[] = [];


wss.on("connection", (socket) => {
    //using this socket server can send and reciev data to all connected clients



    socket.on("message", (message) => {
       const parsedMessage=JSON.parse(message as unknown as string);

       if(parsedMessage.type==="join")
       {
            allSockets.push({
                socket,
                room:parsedMessage.payload.roomId
            })
       }
       
       if(parsedMessage.type==="chat")
       {
            const currentUserRoom=allSockets.find((x)=> x.socket===socket)?.room
       }

       allSockets.forEach(s=>s.socket.send(parsedMessage.payload.message))
    })

    // socket.on("disconnect", () => {
    //     allSockets = allSockets.filter(x => x != socket);
    // })
})

