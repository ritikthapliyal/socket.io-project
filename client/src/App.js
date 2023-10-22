import React, { useEffect } from "react";
import Tasks from "./Tasks";
import io from "socket.io-client";

function App() {
    
    const socket = io("http://localhost:5000")

    socket.emit("messageFromClient", "Hello, Server!")

    socket.on("messageFromServer", (dataFromServer) => {
        console.log("Received from server:", dataFromServer)
    })

    return (
        <div className="App">
        <Tasks />
        </div>
    )
}

export default App;