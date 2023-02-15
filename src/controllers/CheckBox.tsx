import { useState } from "react";
import CheckBoxForm from "@components/CheckBoxForm";
import { useToDoListActions } from "@contexts/todoContext";

const CheckBox = ({
  id,
  description,
  handleCheckBox,
}: {
  id: string;
  description: string;
  handleCheckBox: (id: string, checked: boolean) => void;
}) => {
  const { update } = useToDoListActions();
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = target;
    setIsChecked((prev) => !prev);
    handleCheckBox(id, checked);
    update({ id, todo: description, isCompleted: checked });
  };
  return (
    <CheckBoxForm id={id} isChecked={isChecked} checkHandler={checkHandler} />
  );
};

export default CheckBox;
