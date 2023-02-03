import React from 'react'

const Playlists = () => {
  return (
    <nav className='mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow'>
     <ul>
        {new Array(9).fill(<li>
            <a href="" className='h-8 flex items-center text-s text-link hover:text-white'>
            20. Çalma Listem 
            </a>
        </li>)}
     </ul>
    </nav>
  )
}

export default Playlists
