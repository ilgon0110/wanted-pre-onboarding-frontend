import { TextField, Button } from "@mui/material";
import styled from "styled-components";

interface IToDoHeaderFormProps {
  handleSubmit: (event: React.FormEvent) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formToDo: string;
}

const ToDoHeaderForm = ({
  handleSubmit,
  handleChange,
  formToDo,
}: IToDoHeaderFormProps) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="input todo"
          variant="outlined"
          type="text"
          onChange={handleChange}
          value={formToDo}
          size={"small"}
          inputProps={{ "data-testid": "new-todo-input" }}
        />
        <Button
          variant="contained"
          type="submit"
          size="medium"
          data-testid="new-todo-add-button"
        >
          추가
        </Button>
      </form>
    </>
  );
};

export default ToDoHeaderForm;
