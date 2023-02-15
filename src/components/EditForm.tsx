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
      <input
        data-testid="modify-input"
        value={editValue}
        onChange={handleChange}
      />
      <button
        data-testid="submit-button"
        id={String(id)}
        onClick={handleSubmit}
      >
        제출
      </button>
      <button data-testid="cancel-button" id={String(id)} onClick={handleEdit}>
        취소
      </button>
    </>
  );
};

export default EditForm;
