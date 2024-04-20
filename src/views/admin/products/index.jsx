import CardProduct from "./components/cardProductos";
//import TableProduct from "./components/tableProducts";
import { columnsDataComplex } from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import TableProducts from "views/admin/default/components/tableProduct";

const Products = () => {
    return (
      <div className="mt-3 h-full">
        <TableProducts
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <CardProduct />
      </div>
    );
  };
  
  export default Products;
  