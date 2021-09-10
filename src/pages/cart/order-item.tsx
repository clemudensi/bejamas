import { VFC } from 'react';
import {Container, Icon, Item} from 'semantic-ui-react';
import * as Styled from './styles';
import { Products } from '../../types'

interface OrderItemProps
    extends Pick<
        Products,
        | 'price'
        | 'name'
        | 'image'
        | 'id'
    > {
    quantity: number;
    handleRemoveFromCart: (id: string) => void
};

const OrderItem: VFC<OrderItemProps> = ({
    id,
    quantity,
    price,
    name,
    image,
    handleRemoveFromCart
}) => {

  return(
    <Styled.CartItems>
      <Item.Image src={image.src} />
      <Item.Content className='item-content'>
        <Item.Header as='h3'>{name}</Item.Header>
        <Container textAlign='right'><Icon onClick={()=> handleRemoveFromCart(id)} name="close" /></Container>
        <Item.Header as='h4'>${price}</Item.Header>
        <Item.Meta>
          <span>Quantity: {quantity}</span>
          <span>Total: ${(quantity*price).toFixed(2)}</span>
        </Item.Meta>
      </Item.Content>
    </Styled.CartItems>
  );
};

export { OrderItem };
