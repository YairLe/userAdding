import React from "react";
import styles from "./Input.module.css";

interface IProps {
  inputType: string;
  inputValue: string | number;
  inputProp?: Object;
  handleOnChangeInput: Function;
}

const Input: React.FC<IProps> = (props: IProps) => {
  const { inputType, inputValue, inputProp, handleOnChangeInput } = props;

  return (
    <input
      className={styles.Input}
      type={inputType}
      value={inputValue}
      {...inputProp}
      onChange={(e) => handleOnChangeInput(e)}
    />
  );
};

export default Input;
