import { useState } from "react";
import "./App.css";
import User from "./components/User";
import UserSettings from "./components/UserSettings";
import { UserContextProvider } from "./context/UserContext";

function App() {
  // const [userSetting, setUserSetting] = useState({
  //   payment: "Credit Card",
  //   avatar: "bear.png",
  // });

  return (
    <>
      <UserContextProvider>
        <UserSettings />
        <User />
      </UserContextProvider>
    </>
  );
}

export default App;
