import React from 'react'
import {BsSearch} from 'react-icons/bs'

const NavSearch = () => {
  return (
    <div className='mr-auto ml-4 bg-white relative w-[22.75rem] rounded-3xl overflow-hidden'>
    <span className='absolute top-2.5 left-2 z-10 pl-2 text-black '>
        <BsSearch size={20}/>
    </span>
      <input className="w-[94%] text-black outline-none font-semibold text-sm tracking-tight placeholder-black-300 pl-12 py-[.4rem]" type="text" placeholder='Ne dinlemek istiyorsun?' />
    </div>
  )
}

export default NavSearch
