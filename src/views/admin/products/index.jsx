import { columnsDataHeaderTableProducts } from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import TableProducts from "views/admin/products/components/tableProducts";

const Products = () => {
    return (
      <div className="mt-3 h-full">
        <TableProducts
          tableTitle='Lista de productos'
          columnsData={columnsDataHeaderTableProducts}
          tableData={tableDataComplex}
        />
      </div>
    );
  };
  
  export default Products;
  