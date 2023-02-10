import React from 'react'

const Title = ({title}) => {
  return (
    <header className='px-8 pt-6 pb-2 flex justify-between items-center'>
    <span className='text-[1.5rem] text-white font-bold tracking-tighter hover:underline'>{title}</span>
    <span className='uppercase font-semibold text-sm hover:underline cursor-pointer'>See All</span>
    </header>
  )
}

export default Title
