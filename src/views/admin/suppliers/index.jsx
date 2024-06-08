import DataTable from "services/proveedores.json";
import { columnsSuppliersTable } from "./components/tableSupplier";
import TableComponent from "components/table/table";

const Supplier = () => {
  return (
      <div className="mt-3">
        <TableComponent
          title="Lista de proveedores"
          buttonNew={true}
          columnsData={columnsSuppliersTable}
          tableData={DataTable}
        />
      </div>
    );
  };
  
  export default Supplier;
