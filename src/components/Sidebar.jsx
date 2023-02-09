import React from "react";
import logo from "Images/logo.svg";
import Menu from "./Sidebar/Menu";
import SidebarCover from "./Sidebar/SidebarCover";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import Playlists from "./Sidebar/Playlists";
import {BsDownload} from 'react-icons/bs'
import {BsSave2} from 'react-icons/bs'
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebar = useSelector(state=>state.player.sidebar)
  return (
    <aside className="w-60 py-6 flex-flex-col bg-black flex-shrink-0 relative">
      <img src={logo} alt="" className=" h-10 mb-6 px-6" />

      <Menu />

      <nav className="mt-6">
        <ul>
          <li className="h-10 px-6 pb-2 flex text-semibold text-link hover:text-white">
            <span className="w-6 h-6 bg-white bg-opacity-70 text-black flex items-center justify-center rounded-sm mr-2">
              <AiOutlinePlus />
            </span>
            Çalma Listesi Oluştur
          </li>
          <li className="h-10 px-6 py-2 flex text-semibold  text-link hover:text-white">
            <span className="w-6 h6 bg-gradient-to-br from-purple-700 to-blue-300 flex items-center justify-center rounded-sm mr-2">
              <AiOutlineHeart />
            </span>
            Beğenilen Şarkılar
          </li>

          <li className="h-10 px-6 py-2 flex text-semibold  text-link hover:text-white">
            <span className="w-6 h6 bg-gradient-to-br from-black to-green-800 flex items-center justify-center rounded-sm mr-2">
              <BsSave2 className=" text-primary"/>
            </span>
            Bölümlerin
          </li>

        </ul>
      </nav>

      <Playlists />

      <nav className="absolute bottom-0 bg-black">
        <ul>
          <li className=" h-10 flex  items-center  px-6 mb-1 text-link hover:text-white text-sm font-semibold">
            <span className="w-6 h-6 mr-2 ">
              <BsDownload size={24}/>
            </span>
            Uygulamayı Yükle
          </li>
        </ul>
      </nav>

      {sidebar && <SidebarCover />}
    </aside>
  );
};

export default Sidebar;
