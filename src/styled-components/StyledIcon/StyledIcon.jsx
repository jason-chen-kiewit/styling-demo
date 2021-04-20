import { IconWrapper } from "./style";
import { icons } from "../icons";

const StyledIcon = ({ iconName, iconPosition }) => {
  const Icon = icons[iconName];
  console.log(Icon);
  return (
    <IconWrapper iconPosition={iconPosition}>
      <Icon />
    </IconWrapper>
  );
};

export default StyledIcon;
