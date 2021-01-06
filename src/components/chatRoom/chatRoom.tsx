import React, { useState } from 'react'
import './chatRoom.css'

import firebaseApp from '../../firebase/firebaseConfig'
import { useCollectionData } from 'react-firebase-hooks/firestore'

interface Message {
  id: number,
  text: String,
  createdAt: number
}

const ChatRoom = () =>  {

  const firestore = firebaseApp.firestore()

  const dbRef = firestore.collection('messages')

  const query = dbRef.limit(20)

  const [messages] = useCollectionData<Message>(query, { idField: 'id' })

  const [msgInput, setMsgInput] = useState('')

  const sendMessage = async (event: React.MouseEvent) => {
    event.preventDefault()

    await dbRef.add({
      text: msgInput,
      createdAt: Date.now()
    })

    setMsgInput('')
  }

  const getStringDate = (timestamp : number) => {
    return new Date(timestamp).toDateString()
  }

  return (
    <div className="chatRoom">
        <h2>ChatApp</h2>
        <div id="chat-window">
            <div id="output">
              {messages && messages.map( (data: Message) => 
              <div key={data.id}>
                <span className="message">
                  {data.text} 
                </span>
                <span className="createdAt">
                  Sent on: {getStringDate(data.createdAt)}
                </span>
               
              </div>
                
              )}
            </div>
        </div>
        <input id="message" type="text" placeholder="Message" value={msgInput} onChange={event => setMsgInput(event.target.value)} />
        <button id="send" onClick={sendMessage}>Send</button>
    </div>
  )
}
  
export default ChatRoom