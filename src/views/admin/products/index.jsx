import CardProduct from "./components/cardProductos";
import TableProduct from "./components/tableProducts";

const Products = () => {
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2">
        <TableProduct />
        <CardProduct />
      </div>
    );
  };
  
  export default Products;
  