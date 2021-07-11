import React, { useState } from "react";
import MainPage from "../../Components/UI/MainPage/MainPage";
import { IUsers } from "../../Interfaces/UsersInterface";

const MainScreen: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([
    { name: "gilad", age: 21 },
    { name: "yairrds", age: 24 },
  ]);

  const onAddingUsers: Function = (): void => {
    console.log("hey");
  };

  const addNewUser: Function = (newUser: IUsers) => {
    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
  };

  return <MainPage users={users} onAddNewUser={addNewUser} />;
};

export default MainScreen;
