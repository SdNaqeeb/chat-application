import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContest } from "../context/AuthContest";


const useSignup = () => {
	const [loading, setLoading] = useState(false);
  const{setAuthUser}=useAuthContest()

	const signup = async ({ fullName, username, pass, confirmpass, gender }) => {
		const success = handleInputErrors({ fullName, username, pass, confirmpass, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, pass, confirmpass, gender }),
			});

			const data = await res.json();
     
			if (data.error) {
				throw new Error(data.error);
			}

      //localstorage
      localStorage.setItem("chat-user",JSON.stringify(data));

      //context
      setAuthUser(data)

		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ fullName, username, pass, confirmpass, gender }) {
	if (!fullName || !username || !pass || !confirmpass || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (pass !== confirmpass) {
		toast.error("Passwords do not match");
		return false;
	}

	if (pass.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}

// import { useState } from "react"
// import toast from "react-hot-toast"

// const useSignup = () => {
//   const [loading, setLoading]=useState(false)
//   const signup=async ({fullName,username,pass, confirmpass, gender})=>{
//     const success=handleInputError({fullName,username,pass, confirmpass, gender})
//     if(!success) return;
    
//     setLoading(true)
//     try {
//       const res=await fetch("/api/auth/signup",{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify({fullName,username,pass, confirmpass, gender})
        
//       })
//       const data =await res.json()
//       console.log("logged successfully")

//     } catch (error) {
//       toast.error(error.message)
//     }finally{
//       setLoading(false)
//     }

//   };
//   return {loading,signup}

// }

// export default useSignup;
// function handleInputError({fullName,username,pass, confirmpass, gender}){
//   if(!fullName || !username || !pass ||!confirmpass ||!gender) {
//     toast.error("Please fill in all the fields")
//     return false
//   }
//   if(pass!==confirmpass){
//     toast.error("password do not match")
//     return false
//   }

//   if(pass.length<6){
//     toast.error("enter password more than 6 characters")
//   }
// }