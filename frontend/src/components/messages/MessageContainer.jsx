import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
    const noChatSelected=true;

  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected?(<NoChatSelected />):(<>
            <div className=' flex items-center gap-2 bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span>{" "}
                <span className='text-gray-200 font-bold'>Syed </span>
                <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
            </div>

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