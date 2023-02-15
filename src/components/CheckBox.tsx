import { useState } from "react";
import { todoApi } from "../api/todo";
import { useToDoListActions } from "../contexts/todoContext";

const CheckBox = ({
  id,
  description,
  handleCheckBox,
}: {
  id: string;
  description: string;
  handleCheckBox: (id: string, checked: boolean) => void;
}) => {
  const { get, add, update, remove } = useToDoListActions();
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = target;
    setIsChecked((prev) => !prev);
    handleCheckBox(id, checked);
    update({ id, todo: description, isCompleted: checked });
  };
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

export default CheckBox;
