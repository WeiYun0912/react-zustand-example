import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userSetting, setUserSetting] = useState({
    payment: "Credit Card",
    avatar: "bear.png",
  });

  //   const changeBear = () => {
  //     setUserSetting((prev) => ({ ...prev, avatar: "bear.png" }));
  //   };
  //   const changePanda = () => {
  //     setUserSetting((prev) => ({ ...prev, avatar: "panda.png" }));
  //   };s
  const changeAvatar = (avatar) => {
    setUserSetting((prev) => ({ ...prev, avatar }));
  };
  const changePayment = (payment) => {
    setUserSetting((prev) => ({ ...prev, payment }));
  };

  const value = {
    changeAvatar,
    changePayment,
    avatar: userSetting.avatar,
    payment: userSetting.payment,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
