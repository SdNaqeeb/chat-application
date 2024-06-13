import React from 'react'
import { BsSearch } from "react-icons/bs";
const Searchinput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-blue-600 hover:bg-gray-500 text-black'><BsSearch className='size-4' /></button>
    </form>
  )
}

export default Searchinput

// <form className='flex items-center gap-2'>
// <input type='text' placeholder='search...' className='input input-bordered rounded-full' />
// <button type='submit' className='btn btn-circle bg-blue-600 hover:bg-gray-500 text-black'><BsSearch className='size-4' /></button>
// </form>