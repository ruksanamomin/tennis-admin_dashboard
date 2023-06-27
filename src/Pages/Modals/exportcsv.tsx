import React ,{useState}from 'react'
import { Button, Modal } from 'flowbite-react';
import Players
 from './players';
import Newsletter from './newsletter';

function ExportCsv() {
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal('popup')}>Export CSV File</Button>
      <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal("undefined")}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
           
           
            <div className="flex justify-center gap-4">
             <Players/>
             <Newsletter/>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ExportCsv