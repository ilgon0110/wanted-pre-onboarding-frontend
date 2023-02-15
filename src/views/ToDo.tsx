import React, { useContext } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { todoApi } from "../api/todo";
import CheckBox from "../components/CheckBox";
import Delete from "../components/Delete";
import Edit from "../components/Edit";
import { useToDoListValue, useToDoListActions } from "../contexts/todoContext";

const ToDo = () => {
  const { get, add, edit } = useToDoListActions();
  const { todos: toDoList, isLoading } = useToDoListValue();
  useEffect(() => {
    console.log("get실행");
    get();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
    console.log("targetIndex: ", targetIndex);
    edit(toDoList, targetIndex);
    //toDoList[targetIndex].editMode = !toDoList[targetIndex].editMode;
    console.log(toDoList);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={formToDo}></input>
        <button type="submit">추가</button>
      </form>
      {isLoading
        ? "loading..."
        : toDoList.map((todo) => {
            return (
              <li key={todo.id}>
                <CheckBox
                  id={String(todo.id)}
                  description={todo.todo}
                  handleCheckBox={handleCheckBox}
                />
                {todo.editMode ? (
                  <>
                    <Edit id={String(todo.id)} description={todo.todo} />
                  </>
                ) : (
                  <>
                    <span>{todo.todo}</span>
                    <button
                      data-testid="modify-button"
                      id={String(todo.id)}
                      onClick={(e) => handleEdit(e)}
                    >
                      수정
                    </button>
                    <Delete id={String(todo.id)} />
                  </>
                )}
              </li>
            );
          })}
    </>
  );
};

export default ToDo;
