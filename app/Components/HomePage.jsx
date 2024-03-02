import React from 'react'
import Companies from './Companies'
import FilterCard from './FilterCard'

const HomePage = () => {
  return (
    <div className='flex items-center justify-center w-full '>
        <Companies   />
    </div>
    // <div className='mx-6 px-2 flex flex-row gap-2'>
    //     <FilterCard />
    //    <Companies   />
    // </div>
  )
}

export default HomePage
