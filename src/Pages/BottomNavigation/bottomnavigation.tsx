import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faSearch, faTableTennis } from '@fortawesome/free-solid-svg-icons'
// 
import { useNavigate } from 'react-router-dom'

import {FaMap, FaTableTennis} from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';

function BottomNavigation() {

  const navigate = useNavigate();


  return (
  
<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <button onClick={()=>{navigate("/home")}} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <FontAwesomeIcon icon={faMap} className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500"/>   
            <span className="hidden md:block  text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Users</span>
        </button>
        <button onClick={()=>{navigate("/search")}} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <FontAwesomeIcon icon={faSearch} className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500"/>   

            <span className="hidden md:block  text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Matches</span>
        </button>


        <button onClick={()=>{navigate("/courts")}} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <FontAwesomeIcon icon={faTableTennis} className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500"/>   

            <span className="hidden md:block  text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Courts</span>
        </button>
          
             
       
        
    </div>
</div>

  )
}

export default BottomNavigation
