import React, { useState } from "react";
import { IUserInput } from "../../../Interfaces/UsersInterface";
import AlertModal from "../AlertModal/AlertModal";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/Input";
import Title from "../Title/Title";
import styles from "./AddingUserCard.module.css";

interface IProps {
  usernameInputProp?: Object;
  ageInputProp?: Object;
  onAddNewUser: Function;
}

interface IModalProp {
  title: string;
  text: string;
}

const AddingUserCard: React.FC<IProps> = (props: IProps) => {
  const { usernameInputProp, ageInputProp, onAddNewUser } = props;

  const [showModal, setShowModal] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<IUserInput>({
    usernameInputValue: "",
    ageInputValue: "",
  });
  const [modalprop, setModalProps] = useState<IModalProp>({
    title: "",
    text: "",
  });

  const onAddAge: Function = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserInput({ ...userInput, ageInputValue: event.target.value });
  };
  const onAddUsername: Function = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInput({ ...userInput, usernameInputValue: event.target.value });
  };

  const onHandleSubmit: Function = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      userInput.usernameInputValue.trim().length === 0 ||
      userInput.ageInputValue.trim().length === 0
    ) {
      setModalProps({
        title: "Invalid input",
        text: "Please enter a valid name and age (non-empty values).",
      });
      setShowModal(true);
      return;
    }
    if (+userInput.ageInputValue < 1) {
      setModalProps({
        title: "Invalid age",
        text: "Please enter a valid age (> 0).",
      });
      setShowModal(true);

      return;
    }
    onAddNewUser({
      name: userInput.usernameInputValue,
      age: userInput.ageInputValue,
    });
    setUserInput({
      usernameInputValue: "",
      ageInputValue: "",
    });
  };

  const onChangeModalState: Function = (): void => {
    setShowModal(!showModal);
  };
  return (
    <div>
      {showModal && (
        <AlertModal
          alertText={modalprop.text}
          alertTitle={modalprop.title}
          onAdjustModal={onChangeModalState}
        />
      )}
      <Card>
        <form className={styles.div} onSubmit={(e) => onHandleSubmit(e)}>
          <Title title={"Username"} htmlFor={"Username"} />
          <Input
            inputType={"text"}
            inputValue={userInput.usernameInputValue}
            {...usernameInputProp}
            handleOnChangeInput={onAddUsername}
          />
          <Title title={"Age (Years)"} htmlFor={"Age"} />
          <Input
            inputType={"number"}
            inputValue={userInput.ageInputValue}
            {...ageInputProp}
            handleOnChangeInput={onAddAge}
          />
          <Button buttonLabel={"Add User"} type="submit" />
        </form>
      </Card>
    </div>
  );
};

export default AddingUserCard;
