import React from 'react';
import InputField from "components/fields/InputField";

const ProductDialog = ({ visible, onHide, formDialogFooter }) => {
    return (
        <>{/*<div className=''>
            <Dialog visible={visible} style={{ width: '90%', height: '60rem' }} breakpoints={{ '960px': '80vw', '600px': '90vw' }} header={`Información del producto`} 
            modal className="p-fluid bg-blueSecondary" headerClassName='p-4 rounded-t-xl' footer={formDialogFooter} onHide={onHide}>
                <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2'>
                <InputField variant="auth" extra="mb-3" label="Usuario*" placeholder="mail@simmmple.com" id="email" type="text"/>
                <InputField variant="auth" extra="mb-3" label="Usuario*" placeholder="mail@simmmple.com" id="email" type="text"/>
                <InputField variant="auth" extra="mb-3" label="Usuario*" placeholder="mail@simmmple.com" id="email" type="text"/>
                <InputField variant="auth" extra="mb-3" label="Usuario*" placeholder="mail@simmmple.com" id="email" type="text"/>
                <InputField variant="auth" extra="mb-3" label="Usuario*" placeholder="mail@simmmple.com" id="email" type="text"/>
                <InputField variant="auth" extra="mb-3" label="Usuario*" placeholder="mail@simmmple.com" id="email" type="text"/>
                <InputField variant="auth" extra="mb-3" label="Usuario*" placeholder="mail@simmmple.com" id="email" type="text"/>
                <InputField variant="auth" extra="mb-3" label="Usuario*" placeholder="mail@simmmple.com" id="email" type="text"/>
                </div>
            </Dialog>
        </div>*/}
        </>
        
    );
};

export default ProductDialog;
