import { VFC } from 'react';
import {Popup, Item, Icon } from 'semantic-ui-react';
import { OrderItem } from './order-item';
import { CartProps } from '../../types';
import * as Styled from './styles'

const ShowCartItems:VFC<CartProps>  = ({
    cart,
    quantity,
    handleRemoveFromCart
}) => {
  return(
    <Popup
      trigger={
        <Icon name="shopping cart">
          { cart.length > 0
            ? <Styled.CartLabel color='red' floating>
                {cart.length}
              </Styled.CartLabel>
            : null
          }
        </Icon>
      }
      position='bottom center' hoverable>
      <Popup.Content>
        {cart.length ?
            <Item.Group id='cart-window' divided>
            {cart.map((item) =>
                <OrderItem
                    key={item.id}
                    handleRemoveFromCart={handleRemoveFromCart}
                    id={item.id}
                    quantity={quantity}
                    price={item.price}
                    name={item.name}
                    image={item.image}
                />
            )}
          </Item.Group> :
          <Styled.EmptyCart>Your shopping bag is empty!</Styled.EmptyCart>
        }
      </Popup.Content>
    </Popup>
  );
};

export { ShowCartItems };
