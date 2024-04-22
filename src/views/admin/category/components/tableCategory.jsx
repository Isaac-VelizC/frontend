
import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { FaSearch } from "react-icons/fa";
import { CiEdit, CiTrash, CiCircleInfo } from "react-icons/ci";
import Card from "components/card";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import tableDataCategory from "services/category.json";

export default function TableCategory() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        descripcion: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const getSeverity = (status) => {
        switch (status) {
            case 'Alta':
                return 'success';

            case 'Media':
                return 'warning';

            case 'Baja':
                return 'danger';

            case 'No disponible':
                return 'info';
        }
    };

    useEffect(() => {
        //tableDataCategory.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(tableDataCategory));
            setLoading(false);
        //});
    }, []);

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className=" text-center md:flex md:justify-between">
                <div className='flex justify-end pb-4 lg:pb-0'>
                    <button className="flex items-center font-semibold text-md hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 
                    dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-xl transition duration-200 gap-2">
                        <HiMiniSquaresPlus /> <span>Nueva Categoria</span>
                    </button>
                </div>
                <span className="p-input-icon-left">
                    <FaSearch size={14} style={{marginLeft: '10px'}}/>
                    <input className='pl-8 rounded-md p-1.5 border border-gray-600 dark:!bg-navy-800'
                        value={globalFilterValue}
                        onChange={onGlobalFilterChange}
                        placeholder="Búsqueda palabras clave" />
                </span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag className='text-[10px]' value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className='flex justify-between'>
                <button type="button"
                className="text-green-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold px-1 py-1 me-2 mb-1 dark:text-green-500">
                    <CiCircleInfo/>
                </button>
                <button type="button"
                className="text-yellow-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold px-1 py-1 me-2 mb-1 dark:text-yellow-300">
                    <CiEdit/>
                </button>
                <button type="button"
                className="text-red-700 hover:text-gray-900 dark:hover:text-white text-[18px] font-bold px-1 py-1 me-2 mb-1 dark:text-red-500">
                    <CiTrash/>
                </button>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <Card extra={"w-full h-full p-4"}>
            <div className='h-full overflow-x-scroll xl:overflow-x-hidden'>
                <DataTable cellClassName="text-sm font-bold text-navy-700 dark:text-white py-2" rowClassName="dark:!bg-navy-800"
                    value={customers} paginator rows={5} dataKey="id" filters={filters} loading={loading}
                    paginatorClassName='dark:!bg-navy-800 gap-4' header={header} emptyMessage="No se han encontrado categorias.">
                    <Column headerClassName="pb-2 font-bold tracking-wide text-gray-600" sortable field="name" header="Nombre"/>
                    <Column headerClassName="pb-2 font-bold tracking-wide text-gray-600" bodyClassName="text-center"
                        sortable field="status" header="Importancia" showFilterMenu={false} body={statusBodyTemplate}/>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </div>
        </Card>
    );
}