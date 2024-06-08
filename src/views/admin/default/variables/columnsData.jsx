import React from "react";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";

export const columnsDataDevelopment = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "TECH",
    accessor: "tech",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
];

export const columnsDataCheck = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export const columnsDataColumns = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export const columnsDataComplex = [
  {
    name: 'Nombre',
    selector: row => row.name,
    sortable: true,
    cell: row => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {row.name}
      </p>
    ),
    style: {
      minWidth: '150px',
    },
  },
  {
    name: 'Cantidad',
    selector: row => row.quantity,
    sortable: true,
    cell: row => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {row.quantity}
      </p>
    ),
  },
  {
    name: 'Estado',
    selector: row => row.status,
    cell: row => (
      <div className="flex items-center gap-2">
        <div className="rounded-full text-xl">
          {row.status === 'Approved' ? (
            <MdCheckCircle className="text-green-500" />
          ) : row.status === 'Disable' ? (
            <MdCancel className="text-red-500" />
          ) : row.status === 'Error' ? (
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
    name: 'Acciones',
    cell: row => (
      <button type="button"
        className="text-green-700 hover:text-gray-900 dark:hover:text-white text-[18px] mb-1 dark:text-green-500"
      >
        <CiCircleInfo />
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];


export const columnsDataHeaderTableProducts = [
  {
    Header: "Nombre",
    accessor: "name",
  },
  {
    Header: "Categoria",
    accessor: "category",
  },
  {
    Header: "Cantidad",
    accessor: "quantity",
  },
  {
    Header: "Precio",
    accessor: "price",
  },
  {
    Header: "Estado",
    accessor: "status",
  },
  {
    Header: "Acciones",
    accessor: "actions",
  },
];
