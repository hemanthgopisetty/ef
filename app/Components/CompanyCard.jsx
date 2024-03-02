import React from 'react'

const CompanyCard = () => {
  return (
    <div class=" border border-black/15 flex gap-8 items-center justify-between shadow-lg rounded-md">

    <div class="flex flex-row items-center justify-around gap-11 ml-2">
             {/* <img src="https://s3.amazonaws.com/refer.me/company_logos/leidos.jpeg" alt="Compnay Image" class="rounded-full border w-12 h-12"/> */}

        <div class="">
          <p class="font-bold text-2xl">Leidos</p>
          <p class="font-semibold text-xl">Share Point developer</p>
          <p class="bg-red-400 rounded-md text-xs w-16 p-1 text-red-200">Full Time</p>
          <p class="bg-blue-400 rounded-md text-xs w-16 p-1 text-blue-200">Tech</p>
          <p class=" rounded-md text-xs w-20 p-1 text-blue-600">View Details</p>
        </div>

    </div>

        <div class="mx-2 p-2">
          <button class="bg-blue-500 rounded-lg p-1 text-white">Request Referral</button>
        </div>

    </div>
  )
}

export default CompanyCard
