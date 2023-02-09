import React from 'react'
import { GrPrevious, GrNext } from "react-icons/gr";

const Navigation = () => {
  return (
    <div className="flex gap-x-4 text-white">
        <button className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full ">
          <GrPrevious size={16}/> 
        </button>
        <button className="w-8 h-8 bg-primary flex items-center justify-center rounded-full ">
          <GrNext size={16}/>
        </button>
      </div>
  )
}

export default Navigation