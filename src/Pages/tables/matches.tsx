import React, {useEffect, useState}from 'react'
import { Button } from 'flowbite-react'
import axios from 'axios'

function Matches() {
    const[match,setMatch] = useState([])
    useEffect(() =>{
axios.get('http://localhost:5876/api/getallmatches')
.then(res=>setMatch(res.data.data))
.catch(err=>console.log(err));
    },[])
  return (
    <div className='container'> 
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-3/4 bg-gray-100 my-10 p-7 mx-auto">

<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
            
            <th scope="col" className="px-5 py-3">
              Creator Id
            </th>
            <th scope="col" className="px-5 py-3 dark:bg-gray-800">
              Match Info
            </th>
           
            <th scope="col" className="px-5 py-3">
              No.of players
            </th>
            <th scope="col" className="px-5 py-3">
              Date 
            </th>
            <th scope="col" className="px-5 py-3">
              Time
            </th>
            
           
        </tr>
    </thead>
    <tbody>
    {
            match.map((match:any,index)=>{
              var date = match.match_date.slice(0,10).split("-");
                return <tr key={index}>
                    <td>{match.creator_fullname}</td>
                    <td>{match.match_information}</td>
                    <td>{match.number_of_players}</td>
                    <td>{date[2]}-{date[1]}-{date[0]}</td>
                    <td>{match.match_time}</td>
                  
                    <p className='mt-4 text-red-600'>Disable</p>
                </tr>
                
            }

            )
        }
       
   
        
    </tbody>
 
</table>
<div className="flex justify-center h-full w-screen mt-10">

        
<nav aria-label="Page navigation example ">
<ul  className="inline-flex items-center -space-x-px">
<li>
<a href="#"  className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
<span  className="sr-only">Previous</span>
<svg aria-hidden="true"  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
</a>
</li>
<li>
<a href="#"  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
</li>
<li>
<a href="#"  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
</li>
<li>
<a href="#" aria-current="page"  className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
</li>
<li>
<a href="#"  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
</li>
<li>
<a href="#"  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
</li>
<li>
<a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
<span  className="sr-only">Next</span>
<svg aria-hidden="true"  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
</a>
</li>
</ul>
</nav>


     </div>

</div>
    </div>
  )
}

export default Matches;