import React from "react";
import styles from "./Title.module.css";

interface IProps {
  title: string;
  htmlFor: string;
}

const Title: React.FC<IProps> = (props: IProps) => {
  const { title, htmlFor } = props;

  return (
    <label htmlFor={htmlFor} className={styles.title}>
      {title}
    </label>
  );
};

export default Title;
