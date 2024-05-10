import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("Context Error");
  }

  return context;
};

export default useUser;
