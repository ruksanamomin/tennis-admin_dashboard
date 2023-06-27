import React,{useEffect,useState} from 'react'
import { CSVLink, CSVDownload } from "react-csv";
import axios from 'axios';
import { Button,Modal } from 'flowbite-react';

function Newsletter() {
    const headers = [
        { label: "First Name", key: "firstname" },
        { label: "Last Name", key: "lastname" },
        { label: "Email", key: "email" },
        { label: "Newsletter subscriber", key: "newslettersubscriber"}
      ];
      const[data,setData] = useState([])
      // const[users,setUsers] = useState([])
      
      useEffect(() =>{
        axios.get('http://localhost:5876/api/newsletter_subs')
        .then(
          
          res=>{
            const users:any=[];
            const dat=res.data;
            dat.forEach((element:any) => {
              const obj={firstname: element.first_name, lastname: element.last_name,email: element.email, newslettersubscriber:element.is_newsletter_subscriber}
              users.push(obj);
            });
            setData(users)})
        .catch(err=>console.log(err));
            },[])
  return (
   <>
    <div >
           <CSVLink headers={headers} data={data} > 
           <button>Newsletter Subscribers CSV Export</button></CSVLink>
           </div>
          </>
   
  )
}

export default Newsletter




