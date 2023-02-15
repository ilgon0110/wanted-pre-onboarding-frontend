import React from "react";
import { useEffect, useState } from "react";
import { useToDoListValue, useToDoListActions } from "@contexts/todoContext";
import ToDoForm from "@components/ToDoForm";
import ToDoHeaderForm from "@components/ToDoHeaderForm";

const ToDo = () => {
  const { get, add, edit } = useToDoListActions();
  const { todos: toDoList, isLoading } = useToDoListValue();
  useEffect(() => {
    get();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formToDo.length) {
      alert("Please write any todo");
      return;
    }
    add({ toDoList, todo: formToDo });
  };
  const [formToDo, setFormToDo] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormToDo(value);
  };

  const [checkedItems, setCheckedItems] = useState(new Set());
  const handleCheckBox = (id: string, checked: boolean) => {
    if (checked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    }
    if (!checked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { id } = event.currentTarget;
    const targetIndex = toDoList.findIndex((v) => String(v.id) === id);
    edit(toDoList, targetIndex);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "56px",
      }}
    >
      <ToDoHeaderForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formToDo={formToDo}
      />
      {isLoading
        ? "loading..."
        : toDoList.map((todo) => (
            <ToDoForm
              key={todo.id}
              id={String(todo.id)}
              todo={todo.todo}
              handleCheckBox={handleCheckBox}
              handleEdit={handleEdit}
              editMode={todo.editMode}
            />
          ))}
    </div>
  );
};

export default ToDo;
