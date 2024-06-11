import React, { useState } from "react";
import { Modal, Label, Input, Textarea } from "keep-react";
import MyButton from "components/button/button";
import InputField from "components/fields/InputField";
import InputTextareaField from "components/fields/TextField";

const ProductDialog = ({ isOpen, closeModal, selectedRow }) => {
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
        <Modal.Content>
          <div className="flex justify-center items-center py-2">
            <img
              className=" rounded-full w-28 object-cover"
              src={
                selectedImage ||
                "https://cdn.sanity.io/images/cbyxytey/production/03920b4ded72998ca793497b8fa2c461c3273b79-800x1000.jpg/tegan-8.jpg?w=800&h=1000&auto=format"
              }
              alt=""
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <fieldset className="max-w-md space-y-2">
              <InputField
                label="Nombre *"
                id="name"
                placeholder="Ingrese el nombre del producto"
                type="text"
                value={selectedRow ? selectedRow.name : ''}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                label="Precio *"
                id="price"
                type="text"
                placeholder="Ingrese el precio unitario del producto"
                value={selectedRow ? selectedRow.price : ''}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                id="quantity"
                label="Cantidad *"
                placeholder="Ingrese la cantidad del producto"
                type="number"
                value={selectedRow ? selectedRow.quantity : ''}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                id="date"
                label="Fecha"
                placeholder="Ingrese la fecha de registro"
                type="date"
                value={selectedRow ? selectedRow.date : ''}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                id="category"
                label="Categoria *"
                placeholder="Seleccione la categoria del producto"
                type="text"
                value={selectedRow ? selectedRow.category : ''}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                id="supplier"
                label="Proveedor"
                placeholder="Seleccione al proveedor"
                type="text"
              />
            </fieldset>
          </div>
          <fieldset className="max-w-md space-y-2">
            <InputTextareaField
              id="description"
              label="Descripción"
              placeholder="Ingresa una pequeña descripción"
              rows={3}
              value={selectedRow ? selectedRow.description : ''}
            ></InputTextareaField>
          </fieldset>
        </Modal.Content>
        <Modal.Footer className="flex justify-center items-center">
          <MyButton
            name="Cancelar"
            onClick={closeModal}
            outline={true}
            color="red"
          />
          <MyButton name="Guardar" color="green" />
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default ProductDialog;
