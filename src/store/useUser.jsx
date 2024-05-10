import { create } from "zustand";

const useUserZus = create((set) => ({
  userSetting: {
    payment: "Credit Card",
    avatar: "bear.png",
  },
  changeAvatar(avatar) {
    set((state) => {
      return {
        userSetting: {
          ...state.userSetting,
          avatar,
        },
      };
    });
  },
  changePayment(payment) {
    set((state) => {
      return {
        userSetting: {
          ...state.userSetting,
          payment,
        },
      };
    });
  },
}));

export default useUserZus;
