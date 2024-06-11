import { CiEdit, CiTrash, CiCircleInfo } from "react-icons/ci";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";

import React from "react";

/*const TableProducts = (props ) => {
  
  const [productDialog, setProductDialog] = useState(false);
  const [detalleDialog, setDetalleDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const { columnsData, tableData, tableTitle } = props;
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
    setProductDialog(false);
    setDetalleDialog(false);
    setDeleteDialog(false);
  };
  const newProductModal = () => {
      setProductDialog(true);
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

  const productDialogFooter = (
    <>
      <button label="Cancelar" className='h-10' outlined onClick={hideDialog}></button>
      <button label="Continuar" className='h-10'></button>
    </>
  );
  const detalleDialogFooter = (
      <button >
label="Cerrar" className='h-10' outlined onClick={hideDialog}
      </button>
      
  );
  return (
    <>
      <DialogProduct
          visible={productDialog}
          onHide={() => setProductDialog(false)}
          formDialogFooter={productDialogFooter}
      />
      <DetalleDialog
          visible={detalleDialog}
          onHide={() => setDetalleDialog(false)}
          detalleDialogFooter={detalleDialogFooter}
      />
      <DialogDelete
          visible={deleteDialog}
          onHide={() => setDeleteDialog(false)}
          deleteDialogFooter={productDialogFooter}
      />
    </>
  );
};

export default TableProducts;
*/

export const columnsProductsTable = (openModalDelete, openModalEdit) => [
  {
    name: "Nombre",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {row.name}
      </p>
    ),
    style: {
      minWidth: "150px",
    },
  },
  {
    name: "Categoria",
    selector: (row) => row.category,
    sortable: true,
    cell: (row) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {row.category}
      </p>
    ),
  },
  {
    name: "Cantidad",
    selector: (row) => row.quantity,
    sortable: true,
    cell: (row) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {row.quantity}
      </p>
    ),
  },
  {
    name: "Precio",
    selector: (row) => row.price,
    sortable: true,
    cell: (row) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {row.price}
      </p>
    ),
  },
  {
    name: "Estado",
    selector: (row) => row.status,
    cell: (row) => (
      <div className="flex items-center gap-2">
        <div className="rounded-full text-xl">
          {row.status === "Approved" ? (
            <MdCheckCircle className="text-green-500" />
          ) : row.status === "Disable" ? (
            <MdCancel className="text-red-500" />
          ) : row.status === "Error" ? (
            <MdOutlineError className="text-orange-500" />
          ) : null}
        </div>
        <p className="text-sm font-bold text-navy-700 dark:text-white hidden md:block">
          {row.status}
        </p>
      </div>
    ),
  },
  {
    name: "Acciones",
    cell: (row) => (
      <>
        <button
          type="button" onClick={() => openModalEdit(row)}
          className="text-yellow-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold me-2 mb-1 dark:text-yellow-300"
        >
          <CiEdit />
        </button>
        <button
          type="button" onClick={() => openModalDelete(row.id)}
          className="text-red-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold me-2 mb-1 dark:text-red-500"
        >
          <CiTrash />
        </button>
        <button
          type="button"
          className="text-green-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold me-2 mb-1 dark:text-green-500"
        >
          <CiCircleInfo />
        </button>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
  },
];
