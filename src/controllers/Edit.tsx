import { useEffect, useState } from "react";
import { todoApi } from "../api/todo";
import EditForm from "../components/EditForm";
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
    const { id: editId } = event.currentTarget;
    const targetIndex = toDoList.findIndex((v) => String(v.id) === editId);
    edit(toDoList, targetIndex);
    //toDoList[targetIndex].editMode = !toDoList[targetIndex].editMode;
    console.log(toDoList);
  };
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { id: submitId } = event.currentTarget;
    const targetIndex = toDoList.findIndex((v) => String(v.id) === submitId);
    const isCompleted = toDoList[targetIndex].isCompleted;
    toDoList[targetIndex].todo = editValue;
    edit(toDoList, targetIndex);
    update({ id: submitId, todo: editValue, isCompleted });
  };
  return (
    <EditForm
      id={id}
      handleChange={handleChange}
      handleEdit={handleEdit}
      handleSubmit={handleSubmit}
      editValue={editValue}
    />
  );
};

export default Edit;
