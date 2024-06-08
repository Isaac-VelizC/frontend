import React from 'react';
import { CiTrash, CiCircleInfo } from "react-icons/ci";
import { Badge } from "keep-react";

export const columnsCategoriesTable = (openModalEdit, openModalDelete) => [
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
      name: "Estado",
      selector: (row) => row.status,
      cell: (row) => (
          <Badge color='success' className="text-sm font-bold text-navy-700 dark:text-white">
            {row.status}
          </Badge>
      ),
    },
    {
      name: "Acciones",
      cell: (row) => (
        <>
          <button
            type="button" onClick={() => openModalDelete(row.id)}
            className="text-red-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold me-2 mb-1 dark:text-red-500"
          >
            <CiTrash />
          </button>
          <button
            type="button" onClick={() => openModalEdit(row)}
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
  