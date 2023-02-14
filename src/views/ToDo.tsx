import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { todoApi } from "../api/todo";
import CheckBox from "../components/CheckBox";

interface IToDo {
  id: number;
  todo: string;
  isCompeleted: boolean;
  userId: number;
}

const ToDo = () => {
  const [toDoList, setToDoList] = useState<IToDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    todoApi.getToDos().then((res) => {
      setIsLoading(false);
      setToDoList([...res.data]);
    });
  }, []);
  console.log(toDoList, isLoading);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await todoApi
      .createToDo({ todo: formToDo })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    await todoApi.getToDos().then((res) => {
      setToDoList([...res.data]);
    });
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={formToDo}></input>
        <button type="submit">추가</button>
      </form>
      {toDoList.map((todo) => {
        return (
          <li key={todo.id}>
            <CheckBox
              id={String(todo.id)}
              description={todo.todo}
              handleCheckBox={handleCheckBox}
            />
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button">삭제</button>
          </li>
        );
      })}
    </>
  );
};

export default React.memo(ToDo);
