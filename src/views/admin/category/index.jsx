import CardProduct from "views/admin/products/components/cardProductos";
import { columnsDataComplex } from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import TableProducts from "views/admin/default/components/tableProduct";

const Category = () => {
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2">
        <TableProducts
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <CardProduct />
      </div>
    );
  };
  
  export default Category;
  