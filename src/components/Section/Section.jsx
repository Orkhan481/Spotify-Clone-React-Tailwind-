import React from 'react'
import SongItem from './SongItem'


const Section = ({title, items}) => {
  return (
    <div className='px-6 py-2 mt-4 flex flex-col gap-y-4 text-lg'>
     <header className='p-2 flex justify-between items-center'>
     <span className='text-3xl text-white font-semibold tracking-tight hover:underline'>{title}</span>
     <span className='uppercase font-semibold text-sm hover:underline cursor-pointer'>See All</span>
     </header>

     <section className='grid grid-cols-5 '>
        {items.map(item=>
            
              <SongItem item={item} key={item.id}/>
          
        )}
     </section>
    </div>
  )
}

export default Section
