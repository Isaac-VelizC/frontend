//import { columnsDataComplex } from "views/admin/default/variables/columnsData";
//import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import DataTable from "services/proveedores.json";
import { columnsData } from "./components/columnsData";
import TableSuppliers from "./components/tableSupplier";

const Supplier = () => {
  return (
      <div className="mt-3">
        <TableSuppliers
          columnsData={columnsData}
          tableData={DataTable}
        />
      </div>
    );
  };
  
  export default Supplier;
  