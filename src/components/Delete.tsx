import { useToDoListActions, useToDoListValue } from "../contexts/todoContext";

const Delete = ({ id }: { id: string }) => {
  const { todos: toDoList } = useToDoListValue();
  const { get, remove } = useToDoListActions();
  const handleDelete = () => {
    remove({ toDoList, id });
  };
  return (
    <button data-testid="delete-button" id={id} onClick={handleDelete}>
      삭제
    </button>
  );
};

export default Delete;
