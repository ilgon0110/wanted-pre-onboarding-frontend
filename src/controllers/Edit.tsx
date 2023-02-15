import { useState } from "react";
import EditForm from "@components/EditForm";
import { useToDoListActions, useToDoListValue } from "@contexts/todoContext";

const Edit = ({ id, description }: { id: string; description: string }) => {
  const { todos: toDoList } = useToDoListValue();
  const { update, edit } = useToDoListActions();
  const [editValue, setEditValue] = useState(description);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEditValue(value);
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
      handleSubmit={handleSubmit}
      editValue={editValue}
    />
  );
};

export default Edit;
