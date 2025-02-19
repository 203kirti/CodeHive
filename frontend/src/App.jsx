import React, { useState } from "react";
import "./App.css";
import io from "socket.io-client";

const soket = io("http://localhost:5050");

const App = () => {

  const [joined , setJoined] = useState(false);
  const [roomId , setRoomId] = useState("");
  const [userName, setUserName] = useState("");


  if(!joined){
    return 
    <div className="join-container">
      <div className="join-form">
        <h1> Join Code Room</h1>
        <input
          type="text"
          placeholder="Room Id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
    </div>;
  }
  
  return <div>user joined</div>
};

export default App;
