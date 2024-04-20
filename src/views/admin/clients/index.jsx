import React from "react";
import Pensado from "assets/img/pooh.gif";

const Client = () => {
  return (
    <div className="container">
      <div className="mt-3 flex flex-col items-center">
        <p className="font-semibold text-xl dark:text-white uppercase">Pensado</p>
        <img src={Pensado} alt="" />
      </div>
    </div>
  );
};
  
export default Client;