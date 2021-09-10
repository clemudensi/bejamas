import { VFC } from 'react';
import { List } from 'semantic-ui-react'
import { ProductItem } from './product-item';
import { Products } from '../../types';

interface IProductList {
    products: Products[];
    addProductToCart: (id: string) => void;
}

const ProductList: VFC<IProductList> = ({
    products,
    addProductToCart
}) => (
    <List>
        {
            products.map((product: Products) => (
                <ProductItem
                    id={product?.id}
                    name={product?.name}
                    price={product?.price}
                    image={product?.image}
                    addProductToCart={addProductToCart}
                />
            ))
        }
    </List>
);
export { ProductList };
