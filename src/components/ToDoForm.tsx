import CheckBox from "../controllers/CheckBox";
import Delete from "../controllers/Delete";
import Edit from "../controllers/Edit";
import styled, { css } from "styled-components";
import { Button } from "@mui/material";

interface IToDoFormProps {
  id: string;
  todo: string;
  handleCheckBox: (id: string, checked: boolean) => void;
  handleEdit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  editMode: boolean | undefined;
}

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
  li {
    list-style: none;
  }
`;

const NoEditMode = ({
  todo,
  id,
  handleEdit,
}: {
  todo: string;
  id: string;
  handleEdit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <>
      <span>{todo}</span>
      <Button
        variant="contained"
        data-testid="modify-button"
        id={id}
        onClick={(e) => handleEdit(e)}
        size="small"
      >
        수정
      </Button>
      <Delete id={id} />
    </>
  );
};

const ToDoForm = ({
  id,
  todo,
  handleCheckBox,
  handleEdit,
  editMode,
}: IToDoFormProps) => {
  return (
    <TodoItemBlock>
      <li key={id}>
        <CheckBox id={id} description={todo} handleCheckBox={handleCheckBox} />
        {editMode ? (
          <Edit id={id} description={todo} />
        ) : (
          <NoEditMode id={id} todo={todo} handleEdit={handleEdit} />
        )}
      </li>
    </TodoItemBlock>
  );
};

export default ToDoForm;
