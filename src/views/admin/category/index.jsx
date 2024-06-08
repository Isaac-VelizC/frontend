import TableComponent from "components/table/table";
import PieChartCard from "views/admin/category/components/chartPie";
import tableDataCategory from "services/category.json";
import { columnsCategoriesTable } from "./components/tableCategory";
import DetalleDialog from './components/modalDetalle';
import { useState } from "react";
import DialogConfirm from "components/modal/confirm";
import FormDialogCategory from "./components/modalCategory";

const Category = () => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const openModalEdit = (row) => {
    setSelectedRow(row);
    setIsOpenModalEdit(true);
  };

  const openModalDelete = (row) => {
    setSelectedRow(row);
    setIsOpenModalDelete(true);
  };

  const openModalForm = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModalEdit(false);
    setIsOpenModalDelete(false);
    setIsOpenModal(false);
    setSelectedRow(null);
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <TableComponent
          title="Lista de categorias"
          eventNew={() => openModalForm()}
          buttonNew={true}
          columnsData={columnsCategoriesTable(openModalEdit, openModalDelete)}
          tableData={tableDataCategory}
        />
        <FormDialogCategory isOpen={isOpenModal} closeModal={closeModal}/>
        <DetalleDialog isOpen={isOpenModalEdit} closeModal={closeModal} selectedRow={selectedRow}/>
        <DialogConfirm isOpen={isOpenModalDelete} closeModal={closeModal} selectedRow={selectedRow} />
      </div>
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <PieChartCard/>
      </div>
    </div>
  );
};

export default Category;