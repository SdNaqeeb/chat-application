import { Children, createContext, useContext, useState } from "react";

export const AuthContest=createContext();
export const useAuthContest=()=>{
return useContext(AuthContest)
}
export const AuthContestProvider=({children})=>{
    const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem("chat-user"))||null)
    return <AuthContest.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthContest.Provider>
}