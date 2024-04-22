import React from 'react';
import { Dialog } from 'primereact/dialog';

const ConfirmDeleteDialog = ({ visible, onHide, deleteDialogFooter }) => {
    return (
        <Dialog visible={visible} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} 
            headerClassName='p-2'
            header="Confimación" modal footer={deleteDialogFooter} onHide={onHide}>
            <div className="confirmation-content">
                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                <span>
                    ¿Estás seguro de eliminar?
                </span>
            </div>
        </Dialog>
    );
};

export default ConfirmDeleteDialog;
