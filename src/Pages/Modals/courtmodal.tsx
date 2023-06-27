import React ,{useState}from 'react'

import { Avatar, Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import axios from 'axios';

function CourtModal() {
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatar,setAvatar] = useState("");

   const handleFileChange = (e:any) => {
      setAvatar(e.target.files[0]);
   };

   const handleUpload = () => {
    console.log("Uploading");
      if (!avatar) {
         alert("Please first select a file");
         
         
      }
console.log(avatar,"i am avatar");
      const formData = new FormData();
      const config={
        headers: {
  
          "Content-Type": "multipart/form-data",
  
        },
  
       }
      formData.append("avatar", avatar);

      try {
        //  // Replace this URL with your server-side endpoint for handling file uploads
        //  const response = await fetch("http://localhost:5876/api/addcourt", {
        //     method: "POST",
        //     headers: config,
        //     body: formData
        //  });
        axios.post("http://localhost:5876/api/addcourt",formData,config).then((res:any)=>
        {
              console.log("success")
              alert(" uploaded the file");
    
        }).catch((err:any)=>
        {
            console.log(err,"i m serve rror")
        })
        

      
      } catch (error) {
         console.error("Error while uploading the file:", error);
         alert("Error occurred while uploading the file");
      }
   };

  
  return (
    <>
      <Button color='blue' onClick={() => props.setOpenModal("form-elements")}>Add Court</Button>
      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal("undefined")}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
          <div>
    
      <input type="file" onChange={handleFileChange} />
      <button onClick={()=>handleUpload()}>Upload</button>
   </div>
          {/* <img className='h-full w-full ' src={require("../../assets/court.jpg")} alt=''/> */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Court" value="Court Name" />
              </div>
              <TextInput id="text" placeholder="hdsajhcjkh" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Address" />
              </div>
              <TextInput id="address" placeholder="Type the address" required />
            </div>
           
            <div className="w-full">
              <Button>Add Court</Button>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CourtModal