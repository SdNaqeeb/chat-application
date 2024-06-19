import React from 'react'
import Conversation from './sidebar/Conversation'
import useGetConversations from '../hooks/useGetConversation'
import {getRandomEmoji} from "../utils/emojis"

const Conversations = () => {
  const {loading,conversations}=useGetConversations();
  
  return (
    <div className='py-1 flex flex-col overflow-auto mb-2'>

    {
      conversations.map((conversation,id)=>(
        <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIdx={id===conversation.length-1} />
      ))
    }
        {loading?<span className='loading loading-spinner mx-auto'></span>:null}
        
        
        
    </div>
  )
}


export default Conversations

// const Conversations = () => {
//     return (
//       <div className='py-2 flex flex-col overflow-auto'>
//           <Conversation />
//           <Conversation />
//           <Conversation />
//           <Conversation />
//           <Conversation />
//           <Conversation />
//           <Conversation />
          
//       </div>
//     )
//   }