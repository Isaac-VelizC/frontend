import ChartCategory from "views/admin/default/components/chartCategory";
import { MdAttachMoney, MdPeople, MdOutlineShoppingCart, MdViewList, MdAnalytics } from "react-icons/md";
import Widget from "components/widget/Widget";
import TableProducts from "views/admin/default/components/tableProduct";
import { columnsDataComplex } from "./variables/columnsData";
import tableDataComplex from "./variables/tableDataComplex.json";


const Dashboard = () => {
  return (
    <div>
      {/* Card Widgets */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
        <Widget
          icon={<MdViewList className="h-7 w-7" />}
          title={"Total Productos"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<MdViewList  className="h-6 w-6" />}
          title={"Total ventas valor"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdOutlineShoppingCart className="h-7 w-7" />}
          title={"Productos bajo Stock"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<MdAttachMoney className="h-6 w-6" />}
          title={"Productos mas vendidos"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdPeople className="h-7 w-7" />}
          title={"Usuarios"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<MdAnalytics className="h-6 w-6" />}
          title={"Informes"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdOutlineShoppingCart className="h-7 w-7" />}
          title={"Productos"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<MdAttachMoney className="h-6 w-6" />}
          title={"Ventas"}
          subtitle={"$1,000"}
        />
      </div>
      {/* tablas y Graficos */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TableProducts
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <ChartCategory />
      </div>
      {/* Graficos */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <ChartCategory />
        <ChartCategory />
      </div>
      {/* tablas */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <TableProducts
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <TableProducts
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </div>
    </div>
  );
};

export default Dashboard;
