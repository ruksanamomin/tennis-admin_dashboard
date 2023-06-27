import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toolbar from '../Sidebar/sidebar'
import BottomNavigation from '../BottomNavigation/bottomnavigation'
// import { faEnvelope,faList,faLocationDot, } from '@fortawesome/free-solid-svg-icons'
// import { faStar } from '@fortawesome/free-regular-svg-icons'
// import Dates from "./components/dates";

// import Popular from "./components/popular";
// import SpecialOffers from "./components/specialoffers";
// import ShowTheList from "./showthelist";
// import OntheMap from "./onthemap";
// import BottomNavigation from "../bottomnavigation/bottomnavigation";
// import Sidebar from '../sidebar/sidebar';

 function Home() {
     
 
  

  return (
     <>
      {/*--------web view------- */}
      <div className='hidden lg:block '>
      
      

      <div className='grid grid-cols-12'>
        <div className='col-span-2 '>
        <Toolbar/>
        </div>
       
        <div className='col-span-10 '>
              <div className=' pl-6  h-screen bg-gray-100  overflow-y-auto'>
        <div className='grid grid-cols-12 mx-4 pt-4 ' >
             
             
            
           page content
        
          </div>
          
              </div>
        </div>
        
      </div>
    </div>
     {/*----mobile view---------- */}
      <div className='block lg:hidden   h-screen bg-gray-100  '>
  <div className='grid grid-cols-12 mx-4 pt-4 ' >
       page content
       
        
         <div className='col-span-12   font-bold text-xl'>
      <BottomNavigation/>
      </div>
   
    </div>
    
    </div>

   
     </>
   
  
  )
}

export default Home
