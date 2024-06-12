import DataTable from "services/proveedores.json";
import { columnsSuppliersTable } from "./components/tableSupplier";
import TableComponent from "components/table/table";
import { useState } from "react";
import DialogConfirm from "components/modal/confirm";
import SupplierDialog from "./components/modalSuppliers";

const Supplier = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const openModalDelete = (row) => {
    setSelectedRow(row);
    setIsOpenModalDelete(true);
  };

  const openModalForm = (row) => {
    setSelectedRow(row);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModalDelete(false);
    setIsOpenModal(false);
    setSelectedRow(null);
  };

  return (
      <div className="mt-3">
        <TableComponent
          title="Lista de proveedores"
          eventNew={() => openModalForm()}
          buttonNew={true}
          columnsData={columnsSuppliersTable(openModalDelete, openModalForm)}
          tableData={DataTable}
        />
        <SupplierDialog isOpen={isOpenModal} closeModal={closeModal} selectedRow={selectedRow}/>
        <DialogConfirm isOpen={isOpenModalDelete} closeModal={closeModal} selectedRow={selectedRow} />
      </div>
    );
  };
  
  export default Supplier;
