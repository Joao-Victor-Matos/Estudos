import React from "react";
import Avatar from "../assets/1.png";

const NaoEncontrado = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-6xl text-center mx-auto text-orange-500">
        Não Encontrado :(
      </h1>
      <img src={Avatar} alt="" />
    </div>
  );
};

export default NaoEncontrado;
