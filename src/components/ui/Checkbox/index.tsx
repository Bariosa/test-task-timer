import { FC } from "react";
import { CustomCheckbox, Input, Label, Text } from "./styles";

interface ICheckbox {
  name: string;
  text: string;
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox: FC<ICheckbox> = ({ name, text, isChecked, onChange }) => {
  return (
    <Label>
      <Input
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={isChecked}
      />
      <CustomCheckbox />
      <Text>{text}</Text>
    </Label>
  );
};
export default Checkbox;
