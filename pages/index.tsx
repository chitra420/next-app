import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
const socket = io("https://gyan-websocket.onrender.com",{
  reconnection: true,
  reconnectionAttempts: 99999

});
var i =1;
export default function Home() {
  const [roomId,setRoomId] = useState("");
  const [username,setUsername] = useState("");
  const [show,setShow] = useState(false);
  const [msg,setMsg] = useState("");
  const[messageList,setMessageList] = useState<any []>([]);
  useEffect(()=>{
   
    
  },[])
  const joinRoom = () =>{
    if(username!=='' && roomId!==''){
      setShow(true);
      socket.emit('join_room',roomId);
    }
    
  }

  const SendMessage = async () =>{
    const data = {
      message:msg,
      room:roomId,
      username:username
    }
    await socket.emit('send_message',data);
    setMessageList((messageList) => [...messageList, data])
    setMsg("");
  }

  useEffect(()=>{
    socket.on('receive_msg',(data:any)=>{
      setMessageList((messageList) => [...messageList, data])
    })
  },[socket])

  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      {!show &&
      <div>
      <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Enter your name' style={{height:"40px",width:"250px",marginBottom:"5px"}} type="text" onChange={(event)=>{
              setUsername(event.target.value)
          }} />
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Enter room Id' style={{height:"40px",width:"250px"}} type="text" onChange={(event)=>{
              setRoomId(event.target.value)
          }} />
          <button className='mt-3 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='button' onClick={joinRoom}>Join Room</button>
      </div>
      }
   


      {show && 
        <div style={{marginTop:'5px'}}>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={msg} style={{width:"350px"}}  onChange={(event)=>{
            setMsg(event.target.value);
          }} onKeyDown={(event)=>event.key === "Enter" ? SendMessage() : ''}/>
          {/* <button type='button' onClick={SendMessage}>Send Message</button> */}
        </div>
      }

      <div style={{marginTop:'10px'}}>
        {messageList.map((item:any)=>{
          i = i+1;
          return <p style={{color:item.username==username ? 'red':'green'}} key={i}>{item.message}</p>
        })}
      </div>


    </main>
  )
}
