import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineUp } from "react-icons/ai";
import { setSidebar } from 'stores/player';

const SidebarCover = () => {
   const dispatch = useDispatch()
    const current = useSelector(state=>state.player.current)
  return (
    <div className=' absolute bottom-0 left-0'>
      <div className='relative group'>
      <button 
              onClick={()=> dispatch(setSidebar(false))}
              className="p-1 flex items-center justify-center rounded-full bg-active absolute right-1 top-1 opacity-0 group-hover:opacity-100 rotate-180">
              <AiOutlineUp size={14} color={"#dedede"}/>
              </button>
       <img src={current.image} alt="" className='w-full h-full object-cover'/>
      </div>
    </div>
  )
}
 
export default SidebarCover
