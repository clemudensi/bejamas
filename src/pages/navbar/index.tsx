import { VFC } from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';
import { CartProps } from '../../types';
import { ShowCartItems } from '../cart/show-cart-items';
import Bejamas from '../../assets/images/Bejamas.png';
import * as Styled from './styles'

const NavBar: VFC<CartProps> = ({
    cart,
    quantity,
    handleRemoveFromCart
}) => {
  return(
    <Styled.NavBar
      borderless
      fluid
      size='huge'
    >
      <Container>
        <Menu.Item>
          <a href="/">
            <Image size="small" src={Bejamas} />
          </a>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item >
            <ShowCartItems cart={cart} quantity={quantity} handleRemoveFromCart={handleRemoveFromCart}/>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Styled.NavBar>
  );
};

export { NavBar };
