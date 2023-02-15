import { TextField, Button } from "@mui/material";

interface IEditFormProps {
  editValue: any;
  handleChange: any;
  handleSubmit: any;
  id: any;
  handleEdit: any;
}

const EditForm = ({
  editValue,
  handleChange,
  handleSubmit,
  id,
  handleEdit,
}: IEditFormProps) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="edit todo"
        variant="outlined"
        type="text"
        data-testid="modify-input"
        value={editValue}
        onChange={handleChange}
        size={"small"}
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
        data-testid="submit-button"
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
