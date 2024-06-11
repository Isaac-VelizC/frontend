import React from "react";
import { Modal } from "keep-react";
import MyButton from "components/button/button";
import close from "assets/gif/close.gif";

const DialogConfirm = ({ isOpen, closeModal, selectedRow }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="bg-gray-300">
      <Modal.Body className="space-y-3 dark:bg-navy-800">
        <Modal.Content className="text-center">
          <div className="flex justify-center items-center">
            <img src={close} alt="" width={100}/>
          </div>
          <h2 className=" font-bold text-navy-700 dark:text-white">¿Estás seguro?</h2>
          <small className=" font-light text-navy-700 dark:text-white">
            ¿De verdad quieres eliminar estos registros?
            <br />
            Este proceso no se pude deshacer
          </small>
        </Modal.Content>
        <Modal.Footer className="flex justify-center pt-8">
          <MyButton
            name="Cancelar"
            onClick={closeModal}
            outline={true}
            color="red"
          />
          <MyButton name="Confirmo" color="green" />
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default DialogConfirm;
