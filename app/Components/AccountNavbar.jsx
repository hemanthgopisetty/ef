import React from 'react' ;
import Link from 'next/link' ;
const AccountNavbar = () => {
  return (
    <>
    <div className="w-full h-full  mt-2 p-1  font-pop font-normal text[13px] leading-[19.5px] text-white ">
            <Link href={"/"} className="px-2 py-1 bg-[#5552ff] rounded-lg ">Home</Link>
    </div>
  </>
  )
}

export default AccountNavbar
