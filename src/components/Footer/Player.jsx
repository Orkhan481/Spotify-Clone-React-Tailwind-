import React, { useEffect, useMemo, useState, useRef } from "react";
import { BsShuffle } from "react-icons/bs";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton, GiPauseButton } from "react-icons/gi";
import { BsFillPlayFill, BsFillPauseCircleFill } from "react-icons/bs";
import { RiRepeat2Fill } from "react-icons/ri";
import { secondsToTime } from "utils";

import { MdQueueMusic } from "react-icons/md";
import { TbDevices2 } from "react-icons/tb";
import {
  ImVolumeMute2,
  ImVolumeLow,
  ImVolumeMedium,
  ImVolumeHigh,
} from "react-icons/im";
import { AiOutlineFullscreen, AiOutlineHeart ,AiOutlineUp } from "react-icons/ai";
import {BiWindows} from 'react-icons/bi'
import {IoChevronUpOutline} from 'react-icons/io'

import { useAudio, useFullscreen, useToggle } from "react-use";
import CustomRange from "./CustomRange";
import { useDispatch, useSelector } from "react-redux";

import { setControls, setPlaying, setSidebar } from "stores/player";
import FullScreen from "components/FullScreen";

const Player = () => {

  const fsref = useRef()
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsref, show, {onClose: () => toggle(false)});

  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.player);

  const [audio, state, controls] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);


  useEffect(()=>{
   dispatch(setPlaying(state.playing))
  },[state.playing])

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  //   const volumeIcon = useMemo(() => {
  //     if (state.volume == 0 || state.muted)
  //         return (<span><ImVolumeMute2 /></span>)
  //     if (state.volume > 0 && state.volume < 0.33)
  //         return (<span><ImVolumeMute2 /></span>)
  //     if (state.volume >= 0.33 && state.volume < 0.66)
  //         return "<ImVolumeMute2 />"
  //     return "<ImVolumeMute2 />"
  // }, [state.volume, state.muted])

  return (
    <div className=" h-full px-4 flex justify-between items-center">
      <div className="min-w-[11.25rem] w-[30%] flex items-center ">
        {current && (
          <div className="flex items-center">
            {!sidebar && 
            (
              <div className="w-14 h-14 mr-3 flex-shrink-0 relative group">
              <img src={current.image} alt="" />
              <button 
              onClick={()=> dispatch(setSidebar(true))}
              className="p-1 flex items-center justify-center rounded-full bg-active absolute right-1 top-1 opacity-0 group-hover:opacity-100">
              <AiOutlineUp size={14} color={"#dedede"}/>
              </button>
            </div>
            )}
            <div className="flex flex-col mr-3">
              <h6 className="text-s line-clamp-1 hover:underline font-semibold"> {current.title}</h6>
              <p className="text-[0.688rem] hover:underline">{current.artist}</p>
            </div>
            <div className="flex  items-center">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <AiOutlineHeart size={18} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BiWindows size={18} />
          </button>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-[45.125rem] w-[30%] flex flex-col items-center">
        <div className="flex items-center gap-x-3">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BsShuffle size={20} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <GiPreviousButton size={20} />
          </button>

          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.06]"
          >
            {state?.paused ? <BsFillPlayFill /> : <GiPauseButton />}
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <GiNextButton size={20} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <RiRepeat2Fill size={20} />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {audio}
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
      </div>

      <div className="min-w-[11.25rem] w-[30%] flex items-center gap-x-2 justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MdQueueMusic size={20} />
        </button>

        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <TbDevices2 size={20} />
        </button>

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
        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <AiOutlineFullscreen size={20} />
        </button>
      </div>

      <div ref={fsref}>
          {isFullscreen && (
            <FullScreen 
            state={state}
            controls={controls}
            toggle={toggle}
            />
          )}
      </div>
    </div>
  );
};

export default Player;
