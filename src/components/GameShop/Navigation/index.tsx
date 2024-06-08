import { CartWrapper, StyledNavigation } from './styles';
import { Link } from 'react-router-dom';
import { PATHS } from '@constants/GameShop/constants';
import Icon from '@mdi/react';
import { ADD_GAME_ICON, CART_ICON, STORE_ICON } from '@assets/icons/GameShop';

const Navigation = () => {

  return (
    <StyledNavigation
      $darkenImages={false}
    >
      <Link to={`./${PATHS.games}`}>
        <Icon path={STORE_ICON} size={1} />
      </Link>
      <Link to={`./${PATHS.addGame}`}>
        <Icon path={ADD_GAME_ICON} size={1} />
      </Link>
      <CartWrapper
        $darkenImages={false}
      >
        <Icon path={CART_ICON} size={1} />
      </CartWrapper>
    </StyledNavigation>
  );
}

export default Navigation;