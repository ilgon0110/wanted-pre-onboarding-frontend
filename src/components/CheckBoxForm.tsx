import { Checkbox } from "@mui/material";

interface ICheckBoxFormProps {
  id: string;
  isChecked: boolean;
  checkHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxForm = ({ id, isChecked, checkHandler }: ICheckBoxFormProps) => {
  return (
    <label>
      <Checkbox
        id={String(id)}
        checked={isChecked}
        onChange={(e) => checkHandler(e)}
      />
    </label>
  );
};

export default CheckBoxForm;
