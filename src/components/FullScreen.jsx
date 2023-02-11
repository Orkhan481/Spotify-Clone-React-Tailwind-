import React from "react";
import { useSelector } from "react-redux";

import { BsShuffle } from "react-icons/bs";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton, GiPauseButton } from "react-icons/gi";
import { RiRepeat2Fill } from "react-icons/ri";
import { secondsToTime } from "utils";
import { BsFillPlayFill} from "react-icons/bs";

import { AiOutlineFullscreenExit} from "react-icons/ai";

import {
  ImVolumeMute2,
  ImVolumeLow,
  ImVolumeMedium,
  ImVolumeHigh,
} from "react-icons/im";

import CustomRange from "./Footer/CustomRange";
import {FaSpotify} from 'react-icons/fa'


const FullScreen = ({ toggle, state, controls }) => {
  const { current } = useSelector((state) => state.player);
  return (
    <div className="h-full">
        <div className="absolute top-10 left-7 flex items-center gap-x-4 opacity-70">
            <FaSpotify size={44}/>
            <div>
           <p className="uppercase"> Playing from playlist</p>
           <h6 className="font-semibold text-[.7rem]">{current.title}</h6>
        </div>
        </div>
     <div 
     onClick={controls[state?.playing ? "pause" : "play"]}
     className="absolute inset-0 object-cover bg-center bg-cover blur-md bg-no-repeat opacity-40"
     style={{backgroundImage : `url(${current.image})`}}>

     </div>
      <div className="w-full flex flex-col gap-y-1 absolute bottom-6">
        {/* Photo and title */}
        <div className="flex gap-x-5 px-8">
          <div className="w-20 h-20 object-cover">
          <img src={current?.image} alt="" />
          </div>
          <div className="flex flex-col self-end">
          <h6 className="font-bold text-[1.5rem]">{current?.title}</h6>
          <p className="text-s font-medium line-clamp-2 opacity-70">{current.artist}</p>
          </div>
        </div>
        {/* Custom Range and icons */}
        <div className="absolute right-1 bottom-3 flex items-center px-12 gap-x-1">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          {(state.volume === 0 && <ImVolumeMute2 />) ||
            (state.volume <= 0.33 && <ImVolumeLow />) ||
            (state.volume <= 0.66 && <ImVolumeMedium />) ||
            (state.volume > 0.66 && <ImVolumeHigh />)}
        </button>
        <div className="w-[5.813rem] h-3 flex items-center  rounded-md">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state?.volume}
            onChange={(value) => controls.volume(value)}
          />
        </div>

        <button 
        onClick={toggle}
        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ml-4">
          <AiOutlineFullscreenExit size={24} />
        </button>
        </div>
        <div className=" flex flex-col items-center px-12">
          <div className="w-full flex items-center gap-x-2">
            <div className="text-[0.688rem] text-white text-opacity-70">
              {secondsToTime(state?.time)}
            </div>

            <CustomRange
              step={0.1}
              min={0}
              max={state?.duration || 1}
              value={state?.time}
              onChange={(value) => controls.seek(value)}
            />
            <div className="text-[0.688rem]  text-white text-opacity-70">
              {secondsToTime(state?.duration)}
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <button className="w-8  flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <BsShuffle size={24} />
            </button>

            <button className="w-8  flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <GiPreviousButton size={24} />
            </button>

            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="w-16 h-16 flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.06]"
            >
              {state?.paused ? <BsFillPlayFill size={32}/> : <GiPauseButton size={32}/>}
            </button>

            <button className="w-8  flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <GiNextButton size={24} />
            </button>

            <button className="w-8  flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <RiRepeat2Fill size={24} />
            </button>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default FullScreen;
