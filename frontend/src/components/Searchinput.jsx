import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import useConversation from '../zustand/useConversation';
import useGetConversations from '../hooks/useGetConversation';
import toast from 'react-hot-toast';
const Searchinput = () => {
  const [search,setSearch]=useState("");
  const {setSelectedConversation} =useConversation();
  const{conversations}=useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
  return (
    
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-blue-600 hover:bg-gray-500 text-black'><BsSearch className='size-4' /></button>
    </form>
  )
}

export default Searchinput

