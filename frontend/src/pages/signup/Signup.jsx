import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text pt-2">Full Name</span>

                </label>
                <input type="text" placeholder="Enter Full Name"  className="w-full input input-bordered h-10"/>
            </div>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text pt-2">Username</span>

                </label>
                <input type="text" placeholder="Enter username"  className="w-full input input-bordered h-10"/>
            </div>
            <div>
            <label className="label p-2">
                    <span className="text-base label-text pt-2">Password</span>

                </label>
                <input type="text" placeholder="Enter Password"  className="w-full input input-bordered h-10"/>
            </div>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text pt-2">Confirm Password</span>

                </label>
                <input type="text" placeholder="Confirm Password"  className="w-full input input-bordered h-10 "/>
            </div>
            <GenderCheckbox />
            <div>
                <button className="btn btn-block btn-sm mt-5 bg-blue-500 hover:bg-gray-500 text-black ">Register</button>
            </div>

            <a href="#" className="text-sm 
             text-blue-600 hover:text-gray-400 inline-block">Already have an account?</a>
        </form>
      </div>
    </div>
  );
};

export default Signup;