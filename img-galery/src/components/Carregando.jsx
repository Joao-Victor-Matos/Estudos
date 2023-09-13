import React from "react";
import Avatar from "../assets/2.png";

const Carregando = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-6xl text-center mx-auto text-orange-500">
        Carregando...
      </h1>
      <img src={Avatar} alt="" />
    </div>
  );
};

export default Carregando;
