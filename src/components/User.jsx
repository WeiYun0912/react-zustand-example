import React from "react";
import Avatar from "./Avatar";
import Payment from "./Payment";

const User = ({ userSetting }) => {
  //   const { avatar, payment } = userSetting;
  //   console.log(avatar, payment);
  return (
    <div>
      <Avatar />
      <Payment />
    </div>
  );
};

export default User;
