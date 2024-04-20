import React from "react";
import Pensado from "assets/img/pooh.gif";

const Sales = () => {
  return (
    <div className="container">
      <div className="mt-3 flex flex-col items-center">
        <p className="font-semibold text-xl dark:text-white uppercase">Pensado los widgets de la página</p>
        <img src={Pensado} alt="" />
      </div>
    </div>
  );
};

export default Sales;
