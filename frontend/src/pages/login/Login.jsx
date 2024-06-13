import React from "react";

const login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text pt-2">User Name</span>
                  
                </label>
                <input type="text" placeholder="Enter username"  className="w-full input input-bordered h-10"/>
            </div>
            <div>
            <label className="label p-2">
                    <span className="text-base label-text pt-2">Password</span>
                  
                </label>
                <input type="text" placeholder="Enter Password"  className="w-full input input-bordered h-10"/>
            </div>
            <a href="#" className="text-sm hover:text-blue-600 mt-2 inline-block">{"Don't"} have an account</a>
            <div>
                <button className="btn btn-block btn-sm mt-2 bg-blue-500 hover:bg-gray-500 text-black ">Login</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default login;


// starter code

// const login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//             <div>
//                 <label className="label p-2">
//                     <span className="text-base label-text pt-2">User Name</span>
                  
//                 </label>
//                 <input type="text" placeholder="Enter username"  className="w-full input input-bordered h-10"/>
//             </div>
//             <div>
//             <label className="label p-2">
//                     <span className="text-base label-text pt-2">Password</span>
                  
//                 </label>
//                 <input type="text" placeholder="Enter Password"  className="w-full input input-bordered h-10"/>
//             </div>
//             <a href="#" className="text-sm hover:text-blue-600 mt-2 inline-block">{"Don't"} have an account</a>
//             <div>
//                 <button className="btn btn-block btn-sm mt-2 bg-blue-500 hover:bg-gray-500 text-black ">Login</button>
//             </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default login;
