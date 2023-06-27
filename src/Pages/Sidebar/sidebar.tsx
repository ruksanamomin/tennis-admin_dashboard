
import React ,{useState}from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import {RiLogoutCircleRLine} from "react-icons/ri"
import {FaMap, FaTableTennis} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { Sidebar } from 'flowbite-react';
import {  HiUser } from 'react-icons/hi';

export default function Toolbar() {
  const [open, setOpen] = useState(true);
  return (
    <>
    <div id="separator-sidebar"  className=' flex flex-col h-screen  ' >
   
      
        <div className=' flex flex-col h-screen  ' >
    <Sidebar aria-label="Default sidebar example"  >
    <div className='flex items-center gap-2 px-1 py-3'>
          
            <span className='text-black text-2xl font-semibold'>Dashboard</span>
            <div className="py-3 ml-6
             flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        </div> 
        <hr className='w-screen '/>
      <Sidebar.Items >
        <Sidebar.ItemGroup>
         <br></br>
          
          <Sidebar.Item
            href="#"
            icon={HiUser}
         
          >
             <Link to='/dashboard/users'> User</Link>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={FaMap}
            className='mt-4'
          >
           <Link to='/dashboard/matches'> Matches</Link>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={FaTableTennis}
            className='mt-4'
          >
            <Link to='/dashboard/courts'> Courts</Link>
          </Sidebar.Item>
           <Sidebar.Item
            href="#"
            icon={RiLogoutCircleRLine}
            className='mt-4'
          >
            <Link to='/dashboard/logout'> Logout</Link>
          </Sidebar.Item> 
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div> 

        </div>
   

    </>
  )
}



