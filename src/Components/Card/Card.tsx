import React from "react";
import styles from "./Card.module.css";

interface IProps {
  children: React.ReactNode;
}

const Card: React.FC<IProps> = (props: IProps) => {
  const { children } = props;

  return <div className={styles.card}>{children} </div>;
};

export default Card;
