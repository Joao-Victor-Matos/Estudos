import React, { useState } from "react";

export const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formInput"
        value={value}
        placeholder="Qual a tarefa de hoje?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="formBtn">
        Adicionar Tarefa
      </button>
    </form>
  );
};
