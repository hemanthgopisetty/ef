const LoginButton = ({who,handleWho}) => {
  return (
    <div className='w-full'>
      <div className='bg-slate-50 rounded-full flex items-center justify-center gap-2 py-1 px-2 shadow-sm shadow-white'>
        <button 
          className={`rounded-full font-pop font-normal text-[15px] leading-[22.5px] p-2 w-full ${who === "login" ? 'shadow-custom-inset bg-[#5552ff] text-white' : 'shadow-none bg-white text-black'}`}  onClick={()=>handleWho("login")}
        >
          Login 
        </button>
        <button 
          className={`rounded-full  font-pop font-normal text-[15px] leading-[22.5px] p-2 w-full ${who === "signup" ? 'shadow-custom-inset bg-[#5552ff] text-white' : 'shadow-none bg-white text-black'}`} onClick={()=>handleWho("signup")}
        >Sign Up
        </button>
         </div>
    </div>
  )
}

export default LoginButton
