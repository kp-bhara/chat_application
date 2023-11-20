import './App.css';
import io from "socket.io-client";
import {useState} from "react";
import Chat from './Chat';



const socket= io.connect("http://localhost:3001");

function App() {

  const [username, SetUsername]= useState("");
  const [room,SetRoom]= useState("");
  const [showChat,setShowChat]= useState(false);



  const joinRoom = () =>{
    if(username !=="" && room !== "")
    {
      socket.emit("join_room",room);
      setShowChat(true);

    }

  }   ;
  

  return(
    <div className="App">
      {
        !showChat ? (
      
    <div className="joinChatContainer">     
    <h3> Join a chat room </h3>
      <input type= "text" placeholder="enter username.." onChange= {(event)=>{SetUsername(event.target.value)}}/>

      <input type= "text" placeholder="enter room ID." onChange= {(event)=>{SetRoom(event.target.value)}}/>

      <button onClick={joinRoom}>Join a Chat Room</button>
      </div>
        )
:
      (
      <Chat socket={socket} username={username} room={room}/>
      )}
    </div>
      
    

  );
      
}

export default App;
