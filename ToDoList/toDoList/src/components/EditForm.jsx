import React, { useState } from "react";

export const EditForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formInput"
        value={value}
        placeholder="Atualizar tarefa"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="formBtn">
        Atualizar tarefa
      </button>
    </form>
  );
};
