import React from "react";
import { Button, Modal } from "keep-react";
import MyButton from "components/button/button";

const DialogConfirm = ({ isOpen, closeModal, selectedRow }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="bg-gray-300">
      <Modal.Body className="space-y-3">
        <Modal.Content>
          <div className="!mb-6">
            <p>Confirmas eliminar el porducto</p>
          </div>
        </Modal.Content>
        <Modal.Footer className="flex justify-center">
          <MyButton name='Cancelar' onClick={closeModal} outline={true} color='red'/>
          <MyButton name='Confirmo' color='green'/>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default DialogConfirm;
