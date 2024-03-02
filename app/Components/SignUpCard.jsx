import Image from "next/image";
import { useState } from "react";
import axios from "axios";
const SignUpCard = ({handleWho}) => {
  const [user,setUser] = useState({
      username : "",
      email : "",
      mobilenumber : "",
      password : "",
      confirmpassword: "",
  });

  const handleInput =  (e)=>{
     const {name,value} = e.target;
     console.log("name -> ",name)
     setUser((prevSt)=>({...prevSt,[name]:value}));
  }
  const handleSubmit = async (e)=>{
     e.preventDefault();
     console.log(user);
     
     try {
       
       console.log("User -> ",user);
       const data = {
         username : user.username,
         email : user.email,
         mobileno : user.mobilenumber,
         password : user.password,          
       }
       const res = await axios.post("/api/register", data);
       console.log(res.data) ;

     } catch (error) {
       console.log(error)
     }
     finally{
      setUser({
         username : "",
         email : "",
         mobilenumber : "",
         password : "",
         confirmpassword: "",
     })
     }
  }
  return (
    <div className='w-[395px]'>

        <div className='shadow shadow-white flex flex-col gap-2  items-center justify-around bg-white rounded-md px-12 py-9'>
        <form onSubmit={handleSubmit}>  
            <div className='text-center'>
                <p className='text-[30px] leading-[37.5px] font-hso font-normal text-[#000000BF]'>Register</p>
                <p className='text-[#00000099]'>Sign Up to continue to dashboard</p>
            </div>

            <div className=' border border-[#B3B3B3] w-full h-[44px]  rounded-md p-1'>
              <input type="text" name="username"  placeholder='Username' className='w-full h-full outline-none p-4  text-[15px] leading-[18px] ' value={user.username} onChange={handleInput}/>
           </div>

           <div className=' border border-[#B3B3B3] w-full h-[44px]  rounded-md p-1'>
              <input type="email" name="email"  placeholder='E-mail' className='w-full h-full outline-none p-4  text-[15px] leading-[18px] ' value={user.email} onChange={handleInput}/>
           </div>

           <div className=' border border-[#B3B3B3] w-full h-[44px]  rounded-md p-1'>
              <input type="text" name="mobilenumber"  placeholder='Mobile Number' className='w-full h-full outline-none p-4  text-[15px] leading-[18px] ' value={user.mobilenumber} onChange={handleInput}/>
           </div>

           <div className='border border-[#B3B3B3] w-full h-[44px]  rounded-md p-1'>
              <input type="password" name="password"  placeholder='Password' className='w-full h-full outline-none p-4  text-[15px] leading-[18px] ' value={user.password} onChange={handleInput}/>
           </div>

           <div className='border border-[#B3B3B3] w-full h-[44px]  rounded-md p-1'>
              <input type="password" name="confirmpassword"  placeholder='Confirm Password' className='w-full h-full outline-none p-4  text-[15px] leading-[18px] ' value={user.confirmpassword} onChange={handleInput}/>
           </div>

           <div className='w-full'>
             <button className='bg-[#5552ff] w-full px-16 rounded-full py-2 text-white font-medium text-xl'>Proceed</button>
           </div>
      </form>
           
           <div className='flex'>
            <hr className='w-28 border-2 bg-slate-500 block'/>
             <p className='font-pop text-[#00000099] text-center'>or</p>
             <hr className='w-28 border-2 bg-slate-500 block'/>
           </div>

           <div className='flex p-2 border border-[#B3B3B3] w-full h-[44px] items-center justify-center gap-4 rounded-md'>
              <div className='relative rounded w-[30px] h-[30px]'>
                <Image src={'/Google_Logo.png'} fill alt="Logo"  priority={true} quality={100} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
              </div>
             <button className='font-inter font-semibold text-[16px] leading-[20px] text-[#797979]'>Sign Up Google</button>
           </div>

           <div className='font-pop font-normal text-[12px] leading-[18px] w-full text-left'>
            <p>
              Already have account?&nbsp;&nbsp;
              <button className='text-purple-400 underline' href={"/Account/singup"} onClick={()=>handleWho("login")}>Login</button>
            </p>
           </div>

        </div>

    </div>
  )
}

export default SignUpCard ;
