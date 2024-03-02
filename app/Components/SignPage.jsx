'use client' ;
import LoginButton from "./LoginButton";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignPage = () => {
    const [who,setWho] = useState("signup");
    const router = useRouter();
    const handleWho = (current)=>{
        setWho(current);
        router.push(current);
    }
  return (
    //Who Card
    <div className='text-center flex flex-col items-center justify-around gap-5'>
         <LoginButton who={who} handleWho={handleWho}/>
         {who==="login"?<LoginCard  handleWho={handleWho}/>:<SignUpCard handleWho={handleWho} />}
    </div>
  )
}

export default SignPage
