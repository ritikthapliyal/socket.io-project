const express = require('express')
const app = express()
const socketio = require("socket.io")

const expressApplication = app.listen(5000,()=>{
    console.log("listning on port 5000")
})

const io = socketio(expressApplication,{cors: {origin: "*"}})

const chats = []

io.on('connection',(socket)=>{
    
    socket.emit("previousChats",chats)
    
    // socket.on("messageFromClient",(dataFromClient)=>{
    //     console.log("Received from Client:", dataFromClient)
    // })

    socket.on("send_message",(message)=>{
        chats.push(message)
        io.emit("message",message)
    })

})