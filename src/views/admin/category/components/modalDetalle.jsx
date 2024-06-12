import React, { useState } from "react";
import { Modal, Toggle, Label, Input, Textarea } from "keep-react";
import MyButton from "components/button/button";
import ImgError from "assets/img/img-error.png";
import "./style.css";

const DetalleDialog = ({ isOpen, closeModal, selectedRow }) => {
  const [toggle, setToggle] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="bg-gray-300">
      <Modal.Body className="w-[50rem] space-y-3 dark:bg-navy-800">
        <Modal.Content className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="py-4 space-y-4">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              Categoria:
            </p>
            <fieldset className="max-w-md space-y-2">
              <Label className="text-navy-700 dark:text-white" htmlFor="name">
                Nombre de Categoria *
              </Label>
              <Input
                id="name"
                placeholder="Nombre"
                type="text"
                style={{ background: "transparent" }}
                value={selectedRow ? selectedRow.name : ""}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <Label
                className="text-navy-700 dark:text-white"
                htmlFor="descripcion"
              >
                Descripción
              </Label>
              <Textarea
                placeholder="Ingresa una pequeña descripción"
                rows={7}
                style={{ background: "transparent" }}
              >
                {selectedRow ? selectedRow.descripcion : ""}
              </Textarea>
            </fieldset>
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <Toggle
                  bgColor="green"
                  className="bg-red-500"
                  label="Small"
                  size="sm"
                  onChange={setToggle}
                />
                <small className="font-bold text-navy-700 dark:text-white">
                  Estado: {selectedRow ? selectedRow.status : ""}
                </small>
              </div>
              <div class="input-div text-navy-700 dark:text-white border-2">
                <input
                  class="input"
                  name="file"
                  id="file"
                  type="file"
                  onChange={handleImageChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                  class="icon"
                >
                  <polyline points="16 16 12 12 8 16"></polyline>
                  <line y2="21" x2="12" y1="12" x1="12"></line>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                  <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              className=" rounded-2xl w-80 h-96 object-cover"
              src={selectedImage || (selectedRow ? selectedRow.image : ImgError)}
              alt=""
            />
          </div>
        </Modal.Content>
        <Modal.Footer className="flex justify-center">
          <MyButton
            name="Cerrar"
            onClick={closeModal}
            outline={true}
            color="red"
          />
          <MyButton name="Actualizar" color="green" />
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default DetalleDialog;
