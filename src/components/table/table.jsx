import React, { useState } from "react";
import Card from "components/card";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import DataTable, { createTheme } from "react-data-table-component";
import { CiImport } from "react-icons/ci";

const TableComponent = ({ title, columnsData, tableData, buttonNew, buttonExport, buttonImport, eventNew }) => {
  const [data, setData] = useState(tableData);
  const [searchText, setSearchText] = useState('');

  createTheme(
    "solarized",
    {
      text: {
        primary: "#1B254B",
        secondary: "#3652ba",
      },
      background: {
        default: "transparent",
      },
      divider: {
        default: "transparent",
      },
      pagination: {
        button: {
          default: "#4299e1", // Color del botón de paginación
          hover: "#3182ce", // Color del botón de paginación al pasar el ratón
          disabled: "#cbd5e0", // Color del botón de paginación deshabilitado
        },
        buttonActive: {
          default: "#4299e1", // Color del botón de paginación activo
          hover: "#3182ce", // Color del botón de paginación activo al pasar el ratón
          disabled: "#cbd5e0", // Color del botón de paginación activo deshabilitado
        },
        text: {
          default: "#ffffff", // Color del texto de los botones de paginación
          active: "#ffffff", // Color del texto de los botones de paginación activos
          disabled: "#cbd5e0", // Color del texto de los botones de paginación deshabilitados
        },
      },
    },
    "dark"
  );

  const customStyles = {
    headCells: {
      style: {
        borderBottom: "2px solid #E2E8F0",
        textAlign: "start",
        color: "#4A5568",
        fontWeight: "bold",
      },
    },
    rows: {
      style: {
        "&:not(:last-of-type)": {
          borderBottom: "none",
        },
      },
    },
  };
  
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchText(value);

    const filteredData = tableData.filter(item =>
      (item.name && item.name.toLowerCase().includes(value.toLowerCase())) ||
      (item.category && item.category.toLowerCase().includes(value.toLowerCase())) ||
      (item.precio && item.precio.toString().toLowerCase().includes(value.toLowerCase()))
    );

    setData(filteredData);
  };
  const styleTitle = (
    <div className="relative flex items-center justify-between pt-4">
      <div className="text-xl font-bold text-navy-700 dark:text-white">
        {title}
      </div>
      <div className="flex gap-2">
        {buttonImport ? <button
          className="flex items-center font-semibold text-sm hover:cursor-pointer bg-lightPrimary p-2 text-brand-700 hover:bg-gray-100 
          dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-xl transition duration-200 gap-2">
            <CiImport /> <span>Importar</span>
        </button> : <></>
        }
        {buttonNew ? <button onClick={eventNew}
            className="flex items-center font-semibold text-sm hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 
          dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-xl transition duration-200 gap-2">
            <HiMiniSquaresPlus /> <span>Nuevo</span>
        </button> : <></>}
      </div>
    </div>
  );
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      <DataTable
        title={styleTitle}
        responsive
        columns={columnsData}
        data={data}
        pagination
        customStyles={customStyles}
        theme="solarized"
        paginationComponentOptions={{
          rowsPerPageText: "Filas por pagina:",
          rangeSeparatorText: "de",
          noRowsPerPage: false,
          selectAllRowsItem: false,
          selectAllRowsItemText: "Todo",
        }}
        highlightOnHover
      />
    </Card>
  );
};

export default TableComponent;
