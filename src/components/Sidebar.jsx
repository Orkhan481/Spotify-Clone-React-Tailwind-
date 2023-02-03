import React from "react";
import logo from "Images/logo.svg";
import Menu from "./Sidebar/Menu";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import Playlists from "./Sidebar/Playlists";
import {BsDownload} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <aside className="w-60 py-6 flex-flex-col bg-black ">
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
        </ul>
      </nav>

      <Playlists />

      <nav>
        <ul>
          <li className=" h-10 flex  items-center  px-6 mb-1 text-link hover:text-white text-sm font-semibold">
            <span className="w-6 h-6 mr-2 ">
              <BsDownload size={24}/>
            </span>
            Uygulamayı Yükle
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
