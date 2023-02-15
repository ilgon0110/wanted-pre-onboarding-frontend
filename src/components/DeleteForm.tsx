interface IDeleteFormProps {
  id: string;
  handleDelete: () => void;
}

const DeleteForm = ({ id, handleDelete }: IDeleteFormProps) => {
  return (
    <button data-testid="delete-button" id={id} onClick={handleDelete}>
      삭제
    </button>
  );
};

export default DeleteForm;
