import useUser from "../hooks/useUser";
import useUserZus from "../store/useUser";

const Avatar = () => {
  const { userSetting } = useUserZus();
  //   const { avatar } = useUser();sss
  return <img width={100} src={userSetting.avatar} />;
};

export default Avatar;
