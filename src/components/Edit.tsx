import { useEffect, useState } from "react";
import { todoApi } from "../api/todo";
import { useToDoListActions, useToDoListValue } from "../contexts/todoContext";

const Edit = ({ id, description }: { id: string; description: string }) => {
  const { todos: toDoList, isLoading } = useToDoListValue();
  const { get, update, edit } = useToDoListActions();
  const [editValue, setEditValue] = useState(description);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditValue(value);
  };
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { id } = event.currentTarget;
    const targetIndex = toDoList.findIndex((v) => String(v.id) === id);
    edit(toDoList, targetIndex);
    //toDoList[targetIndex].editMode = !toDoList[targetIndex].editMode;
    console.log(toDoList);
  };
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { id } = event.currentTarget;
    const targetIndex = toDoList.findIndex((v) => String(v.id) === id);
    const isCompleted = toDoList[targetIndex].isCompleted;
    toDoList[targetIndex].todo = editValue;
    edit(toDoList, targetIndex);
    update({ id, todo: editValue, isCompleted });
  };
  return (
    <>
      <input
        data-testid="modify-input"
        value={editValue}
        onChange={handleChange}
      />
      <button
        data-testid="submit-button"
        id={String(id)}
        onClick={handleSubmit}
      >
        제출
      </button>
      <button data-testid="cancel-button" id={String(id)} onClick={handleEdit}>
        취소
      </button>
    </>
  );
};

export default Edit;
