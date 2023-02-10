import React from 'react'

const BookItem = ({collect}) => {
  return (
    <div className='w-[100%] bg-[#242424] hover:bg-[#2a2a2a] transition-all ease-in flex items-center'>
<img src={collect.image} alt=""  className='w-20 h-20'/>
<div className='px-6'>
<h4 className='line-clamp-1'>{collect.artist}</h4>
</div>
    </div>
  )
}

export default BookItem