import { columnsProductsTable } from "./components/tableProducts";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import TableComponent from "components/table/table";

const Products = () => {
    return (
      <div className="mt-3 h-full">
        <TableComponent
          title="Lista de productos"
          buttonNew={true}
          buttonImport={true}
          columnsData={columnsProductsTable}
          tableData={tableDataComplex}
        />
      </div>
    );
  };
  
  export default Products;
  