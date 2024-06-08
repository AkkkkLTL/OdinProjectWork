import { 
  Input, 
  InputWrapper, 
  LogoWrapper, 
  MagnifyGlass, 
  NavigationWrapper, 
  StyledHeader 
} from "./styles";
import Navigation from "../Navigation";
import Icon from "@mdi/react";
import { LOGO_ICON } from "@assets/icons/GameShop";

const Header = () => {
  return (
    <StyledHeader
      $isModifyHeader={true}
      $scrollDirection={"top"}
      $isHideSidebar={true}
      $isChangeSidebar={true}
    >
      <LogoWrapper>
        <Icon path={LOGO_ICON} size={1.5}/>
        <div>GameShop</div>
      </LogoWrapper>
      <NavigationWrapper>
        <InputWrapper
          
        >
          <MagnifyGlass />
          <Input />
        </InputWrapper>
        <Navigation />
      </NavigationWrapper>
    </StyledHeader>
  );
};

export default Header;