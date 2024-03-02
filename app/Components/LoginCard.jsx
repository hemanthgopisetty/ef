'use client' ;
import { useState } from 'react';
import Image from 'next/image' ;
import {signIn} from "next-auth/react"
import { useRouter } from 'next/navigation';
const LoginCard = ({handleWho}) => {
   const [user,setUser] = useState({
      email  : "",
      password : "",
   });
   const router = useRouter();
    const handleInput = (e)=>{
          const {name,value} = e.target ;
          console.log("handle Input -> ",name)
          setUser((prevS)=>({...prevS,[name]:value}))
    }
    const handleSubmit = async (e)=>{
       e.preventDefault();
       console.log("Handle Submit",user);
       try {
        
        const res = await signIn("credentials",{
          email: user.email,
          password: user.password,
          redirect: false,
         })
  
         if(res?.error){
           console.log("Error -> Sign in ", res) ;
           router.push("/notfound")
         }
         else {
            router.push("/")
         }
       } catch (error) {
         console.log(error);
       }
       finally{
          setUser({
            email  : "",
            password : "",
         }) ;
       }
    }
  return (
    <div className='w-[395px]'>

        <div className='shadow shadow-white flex flex-col gap-4  items-center justify-around bg-white rounded-md px-12 py-9'>
            
            <div className='text-center'>
                <p className='text-[30px] leading-[37.5px] font-hso font-normal text-[#000000BF]'>Welcome</p>
                <p className='text-[#00000099]'>Login to continue to dashboard</p>
            </div>
          <form onSubmit={handleSubmit}>
           <div className=' border border-[#B3B3B3] w-full h-[44px]  rounded-md p-1'>
              <input type="text" name="email" value={user.email} placeholder='E-mail' className='w-full h-full outline-none p-4  text-[15px] leading-[18px] ' onChange={handleInput}/>
           </div>

           <div className='border border-[#B3B3B3] w-full h-[44px]  rounded-md p-1'>
              <input type="password" name="password" value={user.password} placeholder='Password' className='w-full h-full outline-none p-4  text-[15px] leading-[18px] ' onChange={handleInput}/>
           </div>

           <div className='flex'>
            <hr className='w-28 border-2 bg-slate-500 block'/>
             <p className='font-pop text-[#00000099] text-center'>or</p>
             <hr className='w-28 border-2 bg-slate-500 block'/>
           </div>

           <div className='flex p-2 border border-[#B3B3B3] w-full h-[44px] items-center justify-center gap-4 rounded-md'>
              <div className='relative rounded w-[30px] h-[30px]'>
                <Image src={'/Google_Logo.png'} fill alt="Logo"  priority={true} quality={100} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
              </div>
             <button className='font-inter font-semibold text-[16px] leading-[20px] text-[#797979]'>Login with Google</button>
           </div>

           <div className='w-full'>
             <button type='submit' className='bg-[#5552ff] w-full px-16 rounded-full py-2 text-white font-medium text-xl'>Continue</button>
           </div>
           </form>
           <div className='font-pop font-normal text-[12px] leading-[18px] w-full text-left'>
            <p>
              Didn’t have account?&nbsp;&nbsp;
              <button className='text-purple-400 underline' href={"/Account/singup"} onClick={()=>handleWho("signup")}>Signup</button>
            </p>
           </div>

           
               
        </div>

    </div>
  )
}

export default LoginCard
