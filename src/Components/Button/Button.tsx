import React from "react";
import styles from "./Button.module.css";

interface IProps {
  buttonLabel: string;
  ButtonClick: () => void;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { buttonLabel, ButtonClick } = props;
  return (
    <button onClick={ButtonClick} className={styles.button}>
      {buttonLabel}
    </button>
  );
};

export default Button;
