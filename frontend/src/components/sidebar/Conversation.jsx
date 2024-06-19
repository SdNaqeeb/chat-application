import React from 'react'
import useConversation  from '../../zustand/useConversation'

const Conversation = ({conversation,lastIdx,emoji}) => {
    const {selectedConversation,setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-blue-600 p-2 py-1 cursor-pointer ${isSelected?"bg-blue-600":""}`} onClick={()=>setSelectedConversation(conversation)}>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic} />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </div>

        {!lastIdx &&<div className='divider my-0 py-0 '></div>}
    </>
  )
}

export default Conversation


// const Conversation = () => {
//     return (
//       <>
//           <div className='flex gap-2 items-center hover:bg-blue-600 p-2 py-1 cursor-pointer'>
//               <div className='avatar online'>
//                   <div className='w-12 rounded-full'>
//                       <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
//                   </div>
//               </div>
  
//               <div className='flex flex-col flex-1'>
//                   <div className='flex gap-3 justify-between'>
//                       <p className='font-bold text-gray-200'>Syed</p>
//                       <span className='text-xl'>😎</span>
//                   </div>
//               </div>
//           </div>
  
//           <div className='divider my-0 py-0 h-1'></div>
//       </>
//     )
//   }