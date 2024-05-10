import React from "react";
import useUser from "../hooks/useUser";
import useUserZus from "../store/useUser";

const UserSettings = ({ setUserSetting }) => {
  // const { changeAvatar, changePayment } = useUser();
  const { changeAvatar, changePayment } = useUserZus();
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>Avatar</h1>
      <button onClick={() => changeAvatar("bear.png")}>
        Change Bear
      </button> |{" "}
      <button onClick={() => changeAvatar("panda.png")}>Change Panda</button>
      <hr />
      <h1>Payment</h1>
      <button onClick={() => changePayment("Line Pay")}>
        Change Line Pay
      </button>{" "}
      |{" "}
      <button onClick={() => changePayment("Credit Card")}>
        Change Credit Card
      </button>
    </div>
  );
};

export default UserSettings;
