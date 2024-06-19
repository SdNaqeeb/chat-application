import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import { IoCall } from "react-icons/io5";
import { IoIosVideocam } from "react-icons/io";
import useConversation  from '../../zustand/useConversation';
import { useAuthContest } from '../../context/AuthContest';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {!selectedConversation?(<NoChatSelected />):(<>
            <div className=' flex justify-between 
            items-center gap-2 bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 px-4 py-2 mb-2'>
                <div className='flex space-x-3 items-center'><span className='label-text'>To:</span>{" "}
                <span className='text-gray-200 font-bold'>{selectedConversation.fullName} </span>
                <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={selectedConversation.profilePic} />
    </div></div>
    </div>
    <div className='flex gap-3'><IoCall className='text-blue-600'/>
    <IoIosVideocam className='text-blue-600' /></div>  </div>
            

            <Messages />
            <MessageInput />
        </>)}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
	
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Syed ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};