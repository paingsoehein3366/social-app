import { theme } from "@/constants/theme";
import { StyleSheet } from "react-native";
import Home from "./Home";
import Image from "./image";
import ArrowLeft from "./ArrowLeft";
import Mail from "./Mail";
import Lock from "./Lock";
import UserIcon from "./user";
import Eye from "./Eye";
import ShowEye from "./ShowEye";

const icons = {
  home: Home,
  image: Image,
  arrowLeft: ArrowLeft,
  mail: Mail,
  lock: Lock,
  user: UserIcon,
  eye: Eye,
  showEye:ShowEye,
}
const Icon = ({name,...props}:any) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 2}
      color={props.color || theme.colors.primary}
      {...props}
    />
  );
};

export default Icon;
