import React from "react";
import { Modal } from "keep-react";
import MyButton from "components/button/button";
import ImgError from "assets/img/img-error.png";

const DetalleDialog = ({ isOpen, closeModal, selectedRow }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="bg-gray-300"
      title="Registrar producto"
    >
      <Modal.Body
        className="w-[60rem] space-y-3 dark:bg-navy-800"
        title="Registra nuevo producto"
      >
        <Modal.Content className="text-navy-700 dark:text-white">
          <h3 className="text-2xl font-bold text-center pb-8">
            {selectedRow ? selectedRow.name : ""}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center py-4 gap-4 px-10">
            <div className=" items-center shadow-xl py-2">
                <h4 className=" font-bold">Precio</h4>
              <p className=" font-normal">{selectedRow ? selectedRow.price : ""}</p>
            </div>
            <div className="items-center shadow-xl py-2">
            <h4 className=" font-bold">Cantidad</h4>
              <p className=" font-normal">{selectedRow ? selectedRow.quantity : ""}</p>
            </div>
            <div className="items-center shadow-xl py-2">
            <h4 className=" font-bold">Categoria</h4>
              <p className=" font-normal">{selectedRow ? selectedRow.category : ""}</p>
            </div>
          </div>
          <small className=" font-semibold px-6">
            {selectedRow ? selectedRow.description : ""}
          </small>
          <div className="flex justify-center items-center py-8">
                <img className=" rounded-full w-40 object-cover" src={ImgError} alt="" />
            </div>
        </Modal.Content>
        <Modal.Footer className="flex justify-center items-center">
          <MyButton name="Cerrar" onClick={closeModal} color="lime" />
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default DetalleDialog;
