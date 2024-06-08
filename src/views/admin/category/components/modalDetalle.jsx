import React from "react";
import { Button, Modal } from "keep-react";
import MyButton from "components/button/button";

const DetalleDialog = ({ isOpen, closeModal, selectedRow }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="bg-gray-300">
      <Modal.Body className="space-y-3">
        <Modal.Content>
          <div className="!mb-6">
            <h3 className="mb-2 text-body-1 font-medium text-metal-900">
              {selectedRow ? selectedRow.name : "New Entry"}
            </h3>
            <p className="text-body-4 font-normal text-metal-600">
            {selectedRow ? <img src={selectedRow.image} alt="" sizes="12"/> : "No existe Img"}
            </p>
            <p>
              {selectedRow ? selectedRow.descripcion : ''}
            </p>
          </div>
        </Modal.Content>
        <Modal.Footer className="flex justify-center">
          <MyButton name='Cerrar' onClick={closeModal} outline={true} color='red'/>
          <MyButton name='Actualizar' color='green'/>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default DetalleDialog;
