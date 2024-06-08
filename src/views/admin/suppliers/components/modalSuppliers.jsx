import React from 'react';
import { Dialog } from 'primereact/dialog';

const SupplierDialog = ({ visible, onHide, formDialogFooter }) => {
    return (
        <Dialog visible={visible} style={{ width: '40rem', height: '60rem' }} breakpoints={{ '960px': '80vw', '600px': '90vw' }} header={`Información del Proveedor`} 
        modal className="p-fluid" headerClassName='p-4 rounded-t-xl' footer={formDialogFooter} onHide={onHide}>
            <div className='text-center py-10'>
                <p className=' font-bold text-2xl'>Formulario del Proveedor</p>
            </div>
        </Dialog>
    );
};

export default SupplierDialog;