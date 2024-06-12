import React, { useState } from "react";
import { Modal, Label, Input, Textarea } from "keep-react";
import MyButton from "components/button/button";
import ImgError from "assets/img/img-error.png";

const FormDialogCategory = ({ isOpen, closeModal }) => {
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
            <div>
                <fieldset className="max-w-md space-y-2">
                    <Label className="text-navy-700 dark:text-white" htmlFor="name">Nombre de Categoria *</Label>
                    <Input id="name" placeholder="Nombre" type="text" style={{ background: 'transparent'}}/>
                </fieldset>
                <fieldset className="max-w-md space-y-2">
                    <Label className="text-navy-700 dark:text-white" htmlFor="file">Ingresar una imagen</Label>
                    <Input id="file" type="file" onChange={handleImageChange}/>
                </fieldset>
                <fieldset className="max-w-md space-y-2">
                    <Label className="text-navy-700 dark:text-white" htmlFor="descripcion">Descripción</Label>
                    <Textarea placeholder="Ingresa una pequeña descripción" rows={7} style={{ background: 'transparent'}}></Textarea>
                </fieldset>
            </div>
            <div className="flex justify-center items-center">
                <img className=" rounded-2xl w-80 h-96 object-cover" src={ selectedImage || ImgError} alt="" />
            </div>
        </Modal.Content>
        <Modal.Footer>
          <MyButton name='Cancelar' onClick={closeModal} outline={true} color='red'/>
          <MyButton name='Guardar' color='green'/>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default FormDialogCategory;
