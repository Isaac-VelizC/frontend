import { columnsDataComplex } from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import TableProducts from "views/admin/default/components/tableProduct";

const Supplier = () => {
    return (
      <div className="mt-3">
        <TableProducts
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </div>
    );
  };
  
  export default Supplier;
  