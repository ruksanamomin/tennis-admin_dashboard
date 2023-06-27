import React,{useEffect,useState} from 'react'
import { CSVLink, CSVDownload } from "react-csv";
import axios from 'axios';
import { Button,Modal } from 'flowbite-react';

export default function Players() {
    const headers = [
        { label: "First Name", key: "firstname" },
        { label: "Last Name", key: "lastname" },
        { label: "Email", key: "email" }
      ];
      const[data,setData] = useState([])
      
      useEffect(() =>{
        axios.get('http://localhost:5876/api/users')
        .then(
          
          res=>{
            const users:any=[];
            const dat=res.data;
            dat.forEach((element: { first_name: any; last_name: any; email: any; }) => {
              const obj={firstname: element.first_name, lastname: element.last_name,email: element.email}
              users.push(obj);
            });
            setData(users)})
        .catch(err=>console.log(err));
            },[])
      return (
        <div>
          <div >
          <CSVLink headers={headers} data={data} > 
          <button>Users CSV Export</button></CSVLink>
          </div>
         
        </div>
      )
    }
    

 