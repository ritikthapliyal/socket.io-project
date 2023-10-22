const express = require('express')
const app = express()
const socketio = require("socket.io")

const expressApplication = app.listen(5000,()=>{
    console.log("listning on port 5000")
})

const io = socketio(expressApplication,{cors: {origin: "*"}})

io.on('connection',(socket)=>{
    
    socket.emit("messageFromServer","Hello from server")
    
    socket.on("messageFromClient",(dataFromClient)=>{
        console.log("Received from Client:", dataFromClient)
    })
})