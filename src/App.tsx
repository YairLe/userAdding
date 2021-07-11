import React, { useState } from "react";
import styles from "./App.module.css";
import { IUsers } from "./Interfaces/UsersInterface";
import MainScreen from "./Screen/MainScreen/MainScreen";

function App() {
  return (
    <div className={styles.div}>
      <MainScreen />
    </div>
  );
}

export default App;
