import { VFC } from 'react';
import {Link, Route, Switch } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Products } from '../../types'
import * as Styled from './styles';

interface IProductItem
    extends Pick<
        Products,
        | 'id'
        | 'name'
        | 'price'
        | 'image'
    > {
    addProductToCart: (id: string) => void;
}

const ProductItem: VFC<IProductItem> = ({
    id,
    name,
    price,
    image,
    addProductToCart
}) => {

    return (
        <Styled.ProductsItem>
            <Switch>
                <Route>
                    <Link to={`products/${id}/details`}>
                        <Image className="pro-images" src={`${image.src}`} />
                    </Link>
                    <Card.Content className="pro-info">
                        <Card.Header as="h4">
                            <Link to={`products/${id}/details`}>
                                {name}
                            </Link>
                        </Card.Header>
                        <Card.Meta>
                            <span className="market-price">
                                ${ price }
                            </span>
                        </Card.Meta>
                    </Card.Content>
                    <Styled.StyledCardContentTool extra onClick={() => addProductToCart(id)}>
                        <Icon name="shop" />
                            Add To Cart
                    </Styled.StyledCardContentTool>
                </Route>
            </Switch>
        </Styled.ProductsItem>
    )
};

export { ProductItem };
