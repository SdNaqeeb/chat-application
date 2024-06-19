import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContest } from "../context/AuthContest";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContest();

	const login = async (username, pass) => {
		const success = handleInputErrors(username, pass);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, pass }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(username, pass) {
	if (!username || !pass) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}

// import React, { useState } from 'react'
// import { useAuthContest } from '../context/AuthContest'
// import toast from 'react-hot-toast'

// const useLogin = () => {
  
//     const[loading,setLoading]=useState(false)
//     const {setAuthUser}=useAuthContest()
//     const login= async (username,pass)=>{
//         const success = handleInputErrors(username, pass);
//         if(!success) return;
//         setLoading(true)
//         try {
//             const res=await fetch("/api/auth/login",{
//                 method:"POST",
//                 headers:{"Content-Type":"application/json"},
//                 body:JSON.stringify({username,pass})
//             })

//             const data=res.json()
            
//             if(data.error){
//                 throw new Error(data.error)
//             }
//             localStorage.setItem("chat-user",JSON.stringify(data))
//             setAuthUser(data)
//         } catch (error) {
//             toast.error(error.message)
//         }finally{
//             setLoading(false)
//         }
//     }
//     return {loading,login}
// }

// export default useLogin

// function handleInputErrors(username, pass) {
// 	if (!username || !pass) {
// 		toast.error("Please fill in all fields");
// 		return false;
// 	}

// 	return true;
// }