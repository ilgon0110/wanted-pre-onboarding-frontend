import { useState } from "react";
import { todoApi } from "../api/todo";

const CheckBox = ({
  id,
  description,
  handleCheckBox,
}: {
  id: string;
  description: string;
  handleCheckBox: (id: string, checked: boolean) => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = target;
    setIsChecked((prev) => !prev);
    handleCheckBox(id, checked);
    todoApi.updateToDo({ id: id, todo: description, isCompleted: checked });
  };
  return (
    <label>
      <input
        type="checkbox"
        id={String(id)}
        checked={isChecked}
        onChange={(e) => checkHandler(e)}
      />
      <span>{description}</span>
    </label>
  );
};

export default CheckBox;
