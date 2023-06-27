import React, {useEffect, useState}from 'react'
import { Button } from 'flowbite-react'
import axios from 'axios'
import PopUpModal from '../Modals/blockmodal'
import ExportCsv from '../Modals/exportcsv'



export default function Users({show,setShow,refreshD}:any) {
   
    const[data,setData] = useState([])
    const [id,setId]=useState();
    useEffect(() =>{
axios.get('http://localhost:5876/api/users')
.then(res=>setData(res.data))
.catch(err=>console.log(err));
    },[])

   
    

 const blockButton=()=>{
    
    console.log("hi abc")
   axios.post("http://localhost:5876/api/blockuser",{id:1})
   .then((res)=>{
     
     console.log(res.data)
      
      

    })
    .catch((error)=>{
        console.log(error)
    })
 }

 const activateButton=()=>{
    
    console.log("hi abc")
   axios.post("http://localhost:5876/api/activateuser",{id:1})
   .then((res)=>{
     
     console.log(res.data)
      
      

    })
    .catch((error)=>{
        console.log(error)
    })
 }

 return (
    <>
    <div className='container'>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-3/4 bg-gray-100 my-10 p-7 mx-auto">
        <div className='flex flex-row justify-evenly'>
        <h3 className='mr-96'>  Users Table</h3>
        <ExportCsv/>
       
        </div>

<table className="w-full mt-10 text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
            
            <th scope="col" className="">
                First Name
            </th>
            <th scope="col" className="">
                Last Name
            </th>
            <th scope="col" className="">
                Date of Birth
            </th>
            <th scope="col" className="">
                Gender
            </th>
            <th scope="col" className="">
                Email
            </th>
          
            <th scope="col" className="">
                is active
            </th>
          
            <th scope="col" className="">
                Admin
            </th>
           
        </tr>
    </thead>
    <tbody>
        {
           data.map((user:any,index)=>{
            const date = user.date_of_birth.slice(0,10).split("-");
               return <tr key={index} >
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{date[2]}-{date[1]}-{date[0]}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.is_active?"true":"false"}</td>
                    <td>{ user.admin ?"true":"false"}</td>
                    <PopUpModal blockButton={blockButton} is_active={user.is_active} activateButton={activateButton}/>
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
</>

    
  )
}

