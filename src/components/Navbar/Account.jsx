import React from 'react'
import { Menu } from '@headlessui/react'
import {AiFillCaretDown} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'

const Account = () => {
   const account =  {
    name:"Orkhan481",
    avatar:"https://res.cloudinary.com/dreqpija0/image/upload/v1671307695/Portfolio/CVPhoto_s84t0w.png"
   } 
  return (
    <Menu as="nav" className="relative z-10">
    {({open})=>(
      <>
      <Menu.Button className={`h-8 flex gap-x-2 items-center  bg-black pr-2 rounded-xl ${open && "bg-backdrop"}`}>
        <img src={account.avatar} alt="" className='w-6 w-6 rounded-full  object-cover'/>
        <span className='font-semibold text-sm  p-1'>{account.name}</span>
        <span className={`${open && "rotate-180"}`}>
        <AiFillCaretDown />
        </span>
    </Menu.Button>
    <Menu.Items className="w-60 p-4 flex flex-col gap-y-1 right-[-16px]  absolute top-full translate-y-2 font-semibold bg-active rounded-md">
      <Menu.Item className="px-4  hover:bg-link">
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500'} py-2 px-4 flex items-center justify-between`}
            href="#"
          >
            Hesap
            <BiLinkExternal size={16}/>
          </a>
        )}
      </Menu.Item>
      <Menu.Item className="px-2  hover:bg-link">
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500'} py-2 px-4`}
            href="#"
          >
            Profil
          </a>
        )}
      </Menu.Item>
      <Menu.Item className="px-2  hover:bg-link">
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500'} py-2 px-4 flex items-center justify-between`}
            href="#"
          >
            Premium'a Yükselt 
             <BiLinkExternal size={16} />
          </a>
        )}
      </Menu.Item>
      <Menu.Item className="px-2  hover:bg-link">
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500'} py-2 px-4`}
            href="#"
          >
            Ayarlar
          </a>
        )}
      </Menu.Item>
      <hr className='m-1'/>
      <Menu.Item className="px-2  hover:bg-link">
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500'} py-2 px-4`}
            href="#"
          >
            Oturumu kapat
          </a>
        )}
      </Menu.Item>
    </Menu.Items>
      </>
    )}
  </Menu>
  )
}

export default Account
