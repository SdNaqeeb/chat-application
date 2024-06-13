import React from 'react'
import Conversation from './sidebar/Conversation'

const Conversations = () => {
  return (
    <div className='py-1 flex flex-col overflow-auto mb-2'>
        <Conversation />
        <Conversation />
        <Conversation />
        
        
        
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