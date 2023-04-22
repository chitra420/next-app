import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
const socket = io("https://gyan-websocket.onrender.com");
var i =1;
export default function Home() {
  const [roomId,setRoomId] = useState("");
  const [username,setUsername] = useState("");
  const [msg,setMsg] = useState("");
  const[messageList,setMessageList] = useState([]);
  useEffect(()=>{
   
    
  },[])
  const joinRoom = () =>{
    socket.emit('join_room',roomId);
  }

  const SendMessage = async () =>{
    const data = {
      message:msg,
      room:roomId,
      username:username
    }
    await socket.emit('send_message',data);
    setMessageList((messageList) => [...messageList, data])
    setMsg('')
  }

  useEffect(()=>{
    socket.on('receive_msg',(data:any)=>{
      setMessageList((messageList) => [...messageList, data])
    })
  },[socket])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/test">CLICK</Link>
      <input type="text" onChange={(event)=>{
          setUsername(event.target.value)
      }} />
      <input type="text" onChange={(event)=>{
          setRoomId(event.target.value)
      }} />
      <button type='button' onClick={joinRoom}>Join Room</button>

      <div style={{marginTop:'20px'}}>
        <input type="text"  onChange={(event)=>{
          setMsg(event.target.value);
        }}/>
        <button type='button' onClick={SendMessage}>Send Message</button>
      </div>

      <div style={{marginTop:'40px'}}>
        {messageList.map((item:any)=>{
          i = i+1;
          return <p style={{color:item.username==username ? 'red':'green'}} key={i}>{item.message}</p>
        })}
      </div>


    </main>
  )
}
