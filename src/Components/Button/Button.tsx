import React from "react";
import styles from "./Button.module.css";

interface IProps {
  buttonLabel: string;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { buttonLabel } = props;
  return <button className={styles.button}>{buttonLabel}</button>;
};

export default Button;
