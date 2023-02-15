interface ICheckBoxFormProps {
  id: string;
  isChecked: boolean;
  checkHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxForm = ({ id, isChecked, checkHandler }: ICheckBoxFormProps) => {
  return (
    <label>
      <input
        type="checkbox"
        id={String(id)}
        checked={isChecked}
        onChange={(e) => checkHandler(e)}
      />
    </label>
  );
};

export default CheckBoxForm;
