import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useMemo, useState } from "react";
import { CiEdit, CiTrash, CiCircleInfo } from "react-icons/ci";
import DetalleDialog from "./modalDetalle";
import DialogSupplier from "./modalSuppliers";
import DialogDelete from "components/modals/modalConfirm";
import { Button } from 'primereact/button';

const TableSuppliers = (props) => {
  const { columnsData, tableData } = props;
  const [supplierDialog, setSupplierDialog] = useState(false);
  const [detalleDialog, setDetalleDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const hideDialog = () => {
    setSupplierDialog(false);
    setDetalleDialog(false);
    setDeleteDialog(false);
  };
  const newSupplierModal = () => {
      setSupplierDialog(true);
  };

  const showDetalleModal = () => {
      setDetalleDialog(true);
  };

  const confirmDeleteModal = () => {
      setDeleteDialog(true);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 10;

  const supplierDialogFooter = (
    <>
      <Button label="Cancelar" className='h-10' outlined onClick={hideDialog} />
      <Button label="Continuar" className='h-10'/>
    </>
  );
  const detalleDialogFooter = (
      <Button label="Cerrar" className='h-10' outlined onClick={hideDialog} />
  );

  return (
    <>
      <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Lista de Proveedores
          </div>
          <button onClick={newSupplierModal}
              className="flex items-center font-semibold text-md hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 
            dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-xl transition duration-200 gap-2">
              <HiMiniSquaresPlus /> <span>Nuevo</span>
          </button>
        </div>

        <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
          <table {...getTableProps()} className="w-full">
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                      className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    >
                      <p className="text-xs tracking-wide text-gray-600">
                        {column.render("Header")}
                      </p>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={index}>
                    {row.cells.map((cell, index) => {
                      let data = "";
                      if (cell.column.Header === "NAME" || cell.column.Header === "CONTACT" || cell.column.Header === "ADDRESS") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        );
                      } else if (cell.column.Header === "STATUS") {
                        data = (
                          <div className="flex items-center gap-2">
                            <div className={`rounded-full text-xl`}>
                              {cell.value === "Activo" ? (
                                <MdCheckCircle className="text-green-500" />
                              ) : cell.value === "Inactivo" ? (
                                <MdCancel className="text-red-500" />
                              ) : cell.value === "Error" ? (
                                <MdOutlineError className="text-orange-500" />
                              ) : null}
                            </div>
                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                              {cell.value}
                            </p>
                          </div>
                        );
                      } else if (cell.column.Header === "ACTIONS") {
                          data = (
                            <>
                              <button type="button" onClick={newSupplierModal}
                                className="text-yellow-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold me-2 mb-1 dark:text-yellow-300">
                                <CiEdit />
                              </button>
                              <button type="button" onClick={confirmDeleteModal}
                                className="text-red-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold me-2 mb-1 dark:text-red-500">
                                  <CiTrash />
                              </button>
                              <button type="button" onClick={showDetalleModal}
                                className="text-green-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold me-2 mb-1 dark:text-green-500">
                                <CiCircleInfo />
                              </button>
                            </>
                          );
                      }
                      return (
                        <td
                          className="pt-[14px] pb-[18px] sm:text-[14px]"
                          {...cell.getCellProps()}
                          key={index}
                        >
                          {data}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
      <DialogSupplier
          visible={supplierDialog}
          onHide={() => setSupplierDialog(false)}
          formDialogFooter={supplierDialogFooter}
      />
      <DetalleDialog
          visible={detalleDialog}
          onHide={() => setDetalleDialog(false)}
          detalleDialogFooter={detalleDialogFooter}
      />
      <DialogDelete
          visible={deleteDialog}
          onHide={() => setDeleteDialog(false)}
          deleteDialogFooter={supplierDialogFooter}
      />
    </>
  );
};

export default TableSuppliers;
