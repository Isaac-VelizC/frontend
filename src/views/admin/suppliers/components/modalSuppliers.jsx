import React from "react";
import InputField from "components/fields/InputField";
import { Modal } from "keep-react";
import MyButton from "components/button/button";

const SupplierDialog = ({ isOpen, closeModal, selectedRow }) => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="max-w-md space-y-2">
              <InputField
                label="Nombre *"
                id="fullname"
                placeholder="Ingrese el nombre"
                type="text"
                value={selectedRow ? selectedRow.name : ""}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                label="Apellido *"
                id="lastname"
                type="text"
                placeholder="Ingrese el apellido"
                value={selectedRow ? selectedRow.lastname : ""}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                id="nit"
                label="NIT/CI *"
                placeholder="Ingrese el NIT/CI"
                type="number"
                value={selectedRow ? selectedRow.nit : ""}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                id="number"
                label="Número"
                placeholder="Ingrese el numero de telefono"
                type="text"
                value={selectedRow ? selectedRow.contact : ""}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                id="address"
                label="Dirección *"
                placeholder="Ingrese la dirección"
                type="text"
                value={selectedRow ? selectedRow.address : ""}
              />
            </fieldset>
            <fieldset className="max-w-md space-y-2">
              <InputField
                id="email"
                label="Correo electronico"
                placeholder="Ingrese el correo electronico"
                type="text"
                value={selectedRow ? selectedRow.email : ""}
              />
            </fieldset>
          </div>
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

export default SupplierDialog;
