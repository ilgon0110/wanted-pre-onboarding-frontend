import CheckBox from "../controllers/CheckBox";
import Delete from "../controllers/Delete";
import Edit from "../controllers/Edit";

interface IToDoFormProps {
  id: string;
  todo: string;
  handleCheckBox: (id: string, checked: boolean) => void;
  handleEdit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  editMode: boolean | undefined;
}
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
      <button
        data-testid="modify-button"
        id={id}
        onClick={(e) => handleEdit(e)}
      >
        수정
      </button>
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
    <li key={id}>
      <CheckBox id={id} description={todo} handleCheckBox={handleCheckBox} />
      {editMode ? (
        <Edit id={id} description={todo} />
      ) : (
        <NoEditMode id={id} todo={todo} handleEdit={handleEdit} />
      )}
    </li>
  );
};

export default ToDoForm;
