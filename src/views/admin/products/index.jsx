import { columnsProductsTable } from "./components/tableProducts";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import TableComponent from "components/table/table";
import DialogConfirm from "components/modal/confirm";
import { useState } from "react";
import ProductDialog from "./components/modalProducts";
import DetalleDialog from "./components/modalDetalle";

const Products = () => {
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
      <div className="mt-3 h-full">
        <TableComponent
          title="Lista de productos"
          eventNew={() => openModalForm()}
          buttonNew={true}
          buttonImport={true}
          columnsData={columnsProductsTable(openModalDelete, openModalForm)}
          tableData={tableDataComplex}
        />
        <ProductDialog isOpen={isOpenModal} closeModal={closeModal} selectedRow={selectedRow}/>
        <DetalleDialog isOpen={isOpenModal} closeModal={closeModal}/>
        <DialogConfirm isOpen={isOpenModalDelete} closeModal={closeModal} selectedRow={selectedRow} />
      </div>
    );
  };
  
  export default Products;
  