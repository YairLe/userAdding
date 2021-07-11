import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./AlertModal.module.css";

interface IProps {
  alertText: string;
  alertTitle: string;
  onAdjustModal: Function;
}

const AlertModal: React.FC<IProps> = (props: IProps) => {
  const { alertText, alertTitle, onAdjustModal } = props;
  return (
    <div className={styles.div} onClick={() => onAdjustModal()}>
      <Card addedStyle={styles.modal}>
        <>
          <p className={styles.header}>{alertTitle}</p>
          <div className={styles.alertText}>{alertText}</div>
          <div className={styles.acceptButton}>
            <Button
              buttonLabel={"Okay"}
              type="button"
              onClickButton={() => onAdjustModal()}
            />
          </div>
        </>
      </Card>
    </div>
  );
};

export default AlertModal;
