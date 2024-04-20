import PieChartCard from "views/admin/category/components/chartPie";
import TableCategory from "./components/tableCategory";

const Category = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <TableCategory/>
      </div>
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <PieChartCard/>
      </div>
    </div>
  );
};

export default Category;