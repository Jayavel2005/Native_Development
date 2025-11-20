const ws = require("ws")

const wss = new ws.Server({ port: 8080 });

wss.on("connection", (socket)=>{
    console.log("New client connected");

    socket.send("Welcome new client!");

    socket.on("message", (message)=>{
        console.log(`Received message: ${message}`);
        socket.send(`Echo: ${message}`);
    })

    setInterval(() => {
        console.log(`Total Connected Clients ${wss.clients.size}`);
        
    }, 1000);

    socket.on("close", ()=>{
        console.log("Client disconnected");
    })
})


console.log(`Socket is running on ws://localhost:8080`);
