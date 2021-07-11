import React from "react";
import { IUsers } from "../../../Interfaces/UsersInterface";
import AddingUserCard from "../AddingUserCard/AddingUserCard";
import ListAddedUsers from "../ListAddedUsers/ListAddedUsers";
import styles from "./MainPage.module.css";

interface IProps {
  users: IUsers[];
  onAddNewUser: Function;
}

const MainPage: React.FC<IProps> = (props: IProps) => {
  const { users, onAddNewUser } = props;

  return (
    <div className={styles.div}>
      <AddingUserCard onAddNewUser={onAddNewUser} />
      <ListAddedUsers users={users} />
    </div>
  );
};

export default MainPage;
