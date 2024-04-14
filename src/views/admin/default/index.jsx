import { MdAttachMoney, MdPeople, MdOutlineShoppingCart, MdViewList } from "react-icons/md";
import Widget from "components/widget/Widget";

const Dashboard = () => {
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
        <Widget
          icon={<MdPeople className="h-7 w-7" />}
          title={"Usuarios"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<MdViewList  className="h-6 w-6" />}
          title={"Categorias"}
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
    </div>
  );
};

export default Dashboard;
