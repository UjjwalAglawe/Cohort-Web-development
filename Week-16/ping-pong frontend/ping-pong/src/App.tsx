import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef=useRef();


  function sendMessage()
  {
      if(!socket){
        return;
      }

      const message=inputRef.current.value;
      //@ts-ignore
      socket.send(message)
  }

  useEffect(()=>{
    const ws=new WebSocket("ws://localhost:8080"); //to connect to websocket
    setSocket(ws);
    ws.onmessage=(ev)=>{
      alert(ev.data);
    }
  },[])
  
  return (
    <div>
        <input ref={inputRef} type='text' placeholder='Message...'></input>
        <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
