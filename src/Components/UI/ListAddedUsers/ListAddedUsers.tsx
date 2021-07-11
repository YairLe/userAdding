import React from "react";
import { IUsers } from "../../../Interfaces/UsersInterface";
import Card from "../Card/Card";
import styles from "./ListAddedUsers.module.css";

interface IProps {
  users: IUsers[];
}

const ListAddedUsers: React.FC<IProps> = (props: IProps) => {
  const { users } = props;

  return (
    <Card addedStyle={styles.cardStyle}>
      <ul className={styles.list}>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <div className={styles.div}>
                {user.name} {`(${user.age} years old)`}
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ListAddedUsers;
