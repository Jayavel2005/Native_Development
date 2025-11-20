const http = require("http");
const ws = require("ws")

const server = http.createServer();
const wss = new ws.Server({server});

wss.on("connection", (socket)=>{
    console.log("Client is connected");

    socket.on("message", (data)=>{
        console.log("Message received: ", data.toString())
        

        wss.clients.forEach((client)=>{
            if(client.readyState === ws.OPEN){
                client.send(data.toString());
            }
        });
    });

    socket.on("close", ()=>{
        console.log("Client disconnected");
    })
    
})
console.log("Server is waiting for the client");


server.listen(8080, ()=>{
    console.log(`Server is listening on port ws://localhost:8080`);
})
