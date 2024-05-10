import React from "react";
import useUser from "../hooks/useUser";
import useUserZus from "../store/useUser";

const Payment = () => {
  const { userSetting } = useUserZus();
  //   const { payment } = useUser();
  return <div>Payment : {userSetting.payment}</div>;
};

export default Payment;
