import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { todoApi } from "../api/todo";

interface IActions {
  get: () => Promise<void>;
  add: ({
    toDoList,
    todo,
  }: {
    toDoList: IToDo[];
    todo: string;
  }) => Promise<void>;
  update: ({
    id,
    todo,
    isCompleted,
  }: {
    id: string;
    todo: string;
    isCompleted: boolean;
  }) => Promise<void>;
  remove: ({
    toDoList,
    id,
  }: {
    toDoList: IToDo[];
    id: string;
  }) => Promise<void>;
  edit: (toDoList: IToDo[], targetIndex: number) => Promise<void>;
}

interface IToDo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  editMode?: boolean;
}

const initialValue: { todos: IToDo[]; isLoading: boolean } = {
  todos: [],
  isLoading: true,
};
const initialAction: IActions = {
  get: async () => {},
  add: async () => {},
  update: async () => {},
  remove: async () => {},
  edit: async () => {},
};

const ToDoListContext = createContext(initialValue);
const ToDoListActionsContext = createContext(initialAction);

export const ToDoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setToDos] = useState<IToDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const actions = useMemo(
    () => ({
      async get() {
        await todoApi.getToDos().then((res) => {
          setIsLoading(false);
          setToDos([...res.data]);
        });
        console.log("get");
      },
      async add({ toDoList, todo }: { toDoList: IToDo[]; todo: string }) {
        await todoApi
          .createToDo({ todo })
          .then((res) => {
            const copyTodo = [...toDoList];
            copyTodo.push(res.data);
            setToDos(copyTodo);
            console.log(res.data);
          })
          .catch((e) => console.log(e));
        console.log("add");
      },
      async update({
        id,
        todo,
        isCompleted,
      }: {
        id: string;
        todo: string;
        isCompleted: boolean;
      }) {
        await todoApi
          .updateToDo({ id: id, todo, isCompleted })
          .then((res) => console.log(res));
        console.log("update");
      },
      async remove({ toDoList, id }: { toDoList: IToDo[]; id: string }) {
        const copyTodos = [...toDoList];
        const targetIndex = copyTodos.findIndex(
          (todo) => String(todo.id) === id
        );
        copyTodos.splice(targetIndex, 1);
        setToDos([...copyTodos]);
        await todoApi.deleteToDo({ id });
        console.log("remove");
      },
      async edit(toDoList: IToDo[], targetIndex: number) {
        const copyTodos = [...toDoList];
        console.log(todos, "copyTodos: ", copyTodos);
        copyTodos[targetIndex].editMode = !copyTodos[targetIndex].editMode;
        setToDos([...copyTodos]);
      },
    }),
    []
  );

  return (
    <ToDoListActionsContext.Provider value={actions}>
      <ToDoListContext.Provider value={{ todos, isLoading }}>
        {children}
      </ToDoListContext.Provider>
    </ToDoListActionsContext.Provider>
  );
};

export const useToDoListValue = () => {
  return useContext(ToDoListContext);
};

export const useToDoListActions = () => {
  return useContext(ToDoListActionsContext);
};
