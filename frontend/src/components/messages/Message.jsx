import React from 'react'
import { useAuthContest } from '../../context/AuthContest'
import { extractTime } from "../../utils/extractTime";
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
  const {authUser} =useAuthContest();
  const {selectedConversation}=useConversation();
  const fromMe=message.senderId===authUser._id;
  const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const fullName=fromMe?authUser.fullName:selectedConversation?.fullName;
	const bubbleBgColor = fromMe ? "bg-blue-600" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div>
        <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={profilePic} />
    </div>
  </div>
  <div className="chat-header">
    {fullName}
    <time className="text-xs opacity-50 mx-1">{formattedTime}</time>
  </div>
  <div className={`chat-bubble text-white ${bubbleBgColor}`} >{message.message}</div>
  <div className="chat-footer text-xs opacity-50">
    {fromMe?"Delivered":""}
  </div>
</div>
{/* <div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={profilePic} />
    </div>
  </div>
  <div className="chat-header">
    {fullName}
    <time className="text-xs opacity-50 mx-1">12:46</time>
  </div>
  <div className={`chat-bubble text-white bg-blue-600 ${bubbleBgColor}`}>{message.message}</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div> */}
    </div>
  )
}

export default Message