

import { Button, Modal } from 'flowbite-react';
import React, {useEffect, useState}from 'react';
import { FaUnderline } from 'react-icons/fa';

export default function PopUpModal({blockButton,is_active,activateButton}:any) {
  const [openModal, setOpenModal] = useState("");
  const [isactive,setIsActive] = useState(is_active);
  const props = { openModal, setOpenModal };

  return (
    <>
    { !isactive? <Button onClick={() =>{ props.setOpenModal('pop-up');}} color="failure"> Block</Button>:<Button onClick={() =>{ props.setOpenModal('pop-up');}} color="success"> Unblock</Button>}
      <Modal 
      show={props.openModal === 'pop-up'}
       size="md"
        popup onClose={() => props.setOpenModal("undefined")}>
          
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
          
            <div  className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {isactive ?"Are you sure you want to activate the user?":"Are you sure you want to block the user?"}
            </div>
            <div className="flex justify-center gap-4">
              <DefaultModal blockButton={blockButton} setIsActive={setIsActive} isActive={isactive} dismiss={props.setOpenModal} activateButton={activateButton}/>
              <Button color="gray" onClick={() => props.setOpenModal("undefined")}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}






 function DefaultModal({blockButton,setIsActive,isActive,dismiss,activateButton}:any) {
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button  color="failure" onClick={() =>{ 
        props.setOpenModal("default");
        if(isActive){
        blockButton();
        }else{
        activateButton();}
        setIsActive(!isActive);
        dismiss(undefined);

        }}>Yes, I'm sure</Button>
      <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal("undefined")}>
        
        <Modal.Body>
          <div className="flex flex-col text-center justify-center " >
            {
          isActive?
 <h3> User has been blocked successfully</h3>:
          
            <h3> User has been activated successfully</h3>
          
        }
           
            
              <Button color="success" className='w-20 ml-60 mt-8' onClick={() => props.setOpenModal('pop-out')}>
               ok
              </Button>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


