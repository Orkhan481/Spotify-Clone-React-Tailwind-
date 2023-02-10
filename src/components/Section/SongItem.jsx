import React from 'react'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent } from 'stores/player'

const SongItem = ({item}) => {
const dispatch = useDispatch()
const {current, playing, controls} = useSelector(state => state.player)

const updateCurrent = () => {
    if(current.id === item.id){
       if(playing){
         controls.pause()
       }
       else{
        controls.play()
       }
    }
    else{
        dispatch(setCurrent(item))
    }
   
}

// const isCurrentItem = () => (current?.id === item.id && playing)

  return (
    <div className='m-2 p-4 bg-backdrop rounded-md hover:scale-95 transition-all group'>
    <div className='relative'>
      <img src={item.image} alt="" />
      <button 
      onClick={updateCurrent}
      className={`absolute bottom-2 right-2 bg-primary p-4 rounded-full group-hover:flex  ${!(current?.id === item.id && playing) ? "hidden" : ""}`}>
      <span className='text-black'>
        {(current?.id === item.id && playing) ? <BsPauseFill size={20} color={"#fff"}/> : <BsFillPlayFill size={20} color={"#fff"}/>}
      </span>
     </button>
    </div>
      
     <h6 className='pt-2 line-clamp-1 font-bold'> {item.title}</h6>
     <p className='pt-2 text-link line-clamp-2'>{item.description}</p>
  </div>
  )
}

export default SongItem
