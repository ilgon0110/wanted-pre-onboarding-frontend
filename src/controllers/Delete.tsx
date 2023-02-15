import DeleteForm from "@components/DeleteForm";
import { useToDoListActions, useToDoListValue } from "@contexts/todoContext";

const Delete = ({ id }: { id: string }) => {
  const { todos: toDoList } = useToDoListValue();
  const { remove } = useToDoListActions();
  const handleDelete = () => {
    remove({ toDoList, id });
  };
  return <DeleteForm id={id} handleDelete={handleDelete} />;
};

export default Delete;
