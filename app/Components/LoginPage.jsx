'use client' ;
import { useState } from 'react';
import LoginCard from './LoginCard'
import LoginButton from './LoginButton'
import SignUpCard from './SignUpCard';
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [who,setWho] = useState("login");
  const router = useRouter();
  const handleWho = (current)=>{
      setWho(current);
      router.push(current);
  }
  return (
    // Who Card
       <div className='text-center flex flex-col items-center justify-around gap-5
       '>
         <LoginButton who={who} handleWho={handleWho}/>
         {who==="login"?<LoginCard  handleWho={handleWho}/>:<SignUpCard handleWho={handleWho} />}
       </div>
  )
}

export default LoginPage
