import React from "react";
import styles from "./Card.module.css";

interface IProps {
  children: React.ReactNode;
  addedStyle?: Object;
}

const Card: React.FC<IProps> = (props: IProps) => {
  const { children, addedStyle } = props;

  return <div className={`${styles.card} ${addedStyle}`}>{children} </div>;
};

export default Card;
