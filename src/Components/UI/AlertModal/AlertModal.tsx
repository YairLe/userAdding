import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./AlertModal.module.css";

interface IProps {
  alertText: string;
  alertTitle: string;
  onAdjustModal: Function;
}

const BackDrop: React.FC<IProps> = (props: IProps) => {
  const { onAdjustModal } = props;

  return <div className={styles.div} onClick={() => onAdjustModal()} />;
};

const ModalOverlay: React.FC<IProps> = (props: IProps) => {
  const { alertText, alertTitle, onAdjustModal } = props;

  return (
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
  );
};

const AlertModal: React.FC<IProps> = (props: IProps) => {
  const portalDiv = document.getElementById("backdrop-root");
  const portalDivOverlay = document.getElementById("overlay-root");
  return (
    <>
      {portalDiv
        ? ReactDOM.createPortal(<BackDrop {...props} />, portalDiv)
        : null}
      {portalDivOverlay
        ? ReactDOM.createPortal(<ModalOverlay {...props} />, portalDivOverlay)
        : null}
    </>
  );
};

export default AlertModal;
