import React from "react";
import styles from "./Button.module.css";

interface IProps {
  buttonLabel: string;
  type: "button" | "submit" | "reset";
  onClickButton?: () => void;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { buttonLabel, type, onClickButton } = props;
  return (
    <button type={type} className={styles.button} onClick={onClickButton}>
      {buttonLabel}
    </button>
  );
};

export default Button;
