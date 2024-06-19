import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";
import useLogout from '../hooks/useLogout';
const LogoutButton = () => {
  const {loading,logout} = useLogout()
  
  return (
    <div div className='mt-auto '>
      {!loading ?(<RiLogoutCircleRLine className='w-6 h-6 text-blue-600 cursor-pointer hover:text-gray-500' onClick={logout}/>):(
        <span className='loading loading-spinner'></span>
      )

      }
    </div>
  )
}

export default LogoutButton