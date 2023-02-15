import { Checkbox } from "@mui/material";
import styled, { css } from "styled-components";

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
