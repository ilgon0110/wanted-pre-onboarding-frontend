import { Button } from "@mui/material";

interface IDeleteFormProps {
  id: string;
  handleDelete: () => void;
}

const DeleteForm = ({ id, handleDelete }: IDeleteFormProps) => {
  return (
    <Button
      variant="outlined"
      data-testid="delete-button"
      id={id}
      onClick={handleDelete}
      size={"small"}
      color="error"
    >
      삭제
    </Button>
  );
};

export default DeleteForm;
