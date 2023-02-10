import React from 'react'
import SongItem from './SongItem'
import Title from './Title'


const Section = ({title, items}) => {
  return (
    <div className='mt-1 flex flex-col gap-y-4 text-lg'>
    <Title title={title}/>

     <section className='grid grid-cols-5 px-4'>
        {items.map(item=>
            
              <SongItem item={item} key={item.id}/>
          
        )}
     </section>
    </div>
  )
}

export default Section
