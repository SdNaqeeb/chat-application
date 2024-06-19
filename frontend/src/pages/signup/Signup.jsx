import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox';
import {Link} from "react-router-dom"
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [input,setInput]=useState({
    fullName:"",
    username:"",
    pass:"",
    confirmpass:"",
    gender:""
  })
  const {loading,signup}=useSignup()
  const handleGender=gender=>{
    setInput({...input,gender})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
   await signup(input)
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text pt-2">Full Name</span>

                </label>
                <input type="text" value={input.fullName} onChange={(e)=>setInput({...input,fullName:e.target.value})} placeholder="Enter Full Name"  className="w-full input input-bordered h-10"/>
            </div>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text pt-2">Username</span>

                </label>
                <input value={input.username} onChange={e=>setInput({...input,username:e.target.value})} type="text" placeholder="Enter username"  className="w-full input input-bordered h-10"/>
            </div>
            <div>
            <label className="label p-2">
                    <span className="text-base label-text pt-2">Password</span>

                </label>
                <input value={input.pass} onChange={e=>setInput({...input,pass:e.target.value})} type="text" placeholder="Enter Password"  className="w-full input input-bordered h-10"/>
            </div>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text pt-2">Confirm Password</span>

                </label>
                <input value={input.confirmpass} onChange={e=>setInput({...input,confirmpass:e.target.value})} type="text" placeholder="Confirm Password"  className="w-full input input-bordered h-10 "/>
            </div>
            <GenderCheckbox onSelect={handleGender} selectedGender={input.gender}/>
            <div>
                <button className="btn btn-block btn-sm mt-5 bg-blue-500 hover:bg-gray-500 text-black " disabled={loading}>{loading?<span className='loading loading-spinner'></span>:"Sign Up"}</button>
            </div>

            <Link to="/login" className="text-sm 
             text-blue-600 hover:text-gray-400 inline-block">Already have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;