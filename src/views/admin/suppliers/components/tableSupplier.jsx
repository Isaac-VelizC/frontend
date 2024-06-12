import { CiEdit, CiTrash } from "react-icons/ci";

export const columnsSuppliersTable = (openModalDelete, openModalForm) => [
  { name: '#', selector: (row, index) => index + 1,
    cell: (row, index) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {index + 1}
      </p>
    ),
    style: {
      maxWidth: "20px",
    }, },
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
    name: "Dirección",
    selector: (row) => row.address,
    sortable: true,
    cell: (row) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {row.address}
      </p>
    )
  },
  {
    name: "Contacto",
    selector: (row) => row.contact,
    sortable: true,
    cell: (row) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {row.contact}
      </p>
    )
  },
  {
    name: "Estado",
    selector: (row) => row.status,
    cell: (row) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {row.status}
        </p>
    ),
  },
  {
    name: "Acciones",
    cell: (row) => (
      <>
        <button
          type="button" onClick={() => openModalForm(row)}
          className="text-yellow-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold me-2 mb-1 dark:text-yellow-300"
        >
          <CiEdit />
        </button>
        <button
          type="button" onClick={() => openModalDelete()}
          className="text-red-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold me-2 mb-1 dark:text-red-500"
        >
          <CiTrash />
        </button>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
  },
];
