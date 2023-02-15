import { TextField, Button } from "@mui/material";

interface IEditFormProps {
  editValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  id: string;
}

const EditForm = ({
  editValue,
  handleChange,
  handleSubmit,
  id,
}: IEditFormProps) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="edit todo"
        variant="outlined"
        type="text"
        value={editValue}
        onChange={handleChange}
        size={"small"}
        inputProps={{ "data-testid": "modify-input" }}
      />
      <Button
        variant="contained"
        data-testid="submit-button"
        id={String(id)}
        onClick={handleSubmit}
      >
        제출
      </Button>
      <Button
        variant="outlined"
        data-testid="cancel-button"
        id={String(id)}
        onClick={handleSubmit}
        color="error"
      >
        취소
      </Button>
    </>
  );
};

export default EditForm;
