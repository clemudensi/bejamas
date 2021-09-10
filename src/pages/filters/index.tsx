import { VFC} from 'react';
import {Card, Grid} from 'semantic-ui-react';
import { ProductFilter } from './product-filter';
import { FilterSection } from './filter-section';
import * as Styled from './styles';
import { ProductItem } from '../product-list/product-item';
import { Products } from '../../types';

interface IFilterList {
    activeFilter: string[];
    addProductToCart: (id: string) => void;
    handleSelectPriceFilter: (type: string) => void;
    handleSelectNameFilter: () => void;
    handleSelectFilter: (filter: string) => void;
    products: Products[];
}

const FilterList: VFC<IFilterList> = ({
    activeFilter,
    addProductToCart,
    handleSelectNameFilter,
    handleSelectPriceFilter,
    handleSelectFilter,
    products,
}) => {
    return (
        <Card fluid>
            <Card.Content>
                <Grid>
                    <Grid.Column textAlign="right">
                        <FilterSection
                            handleSelectPriceFilter={handleSelectPriceFilter}
                            handleSelectNameFilter={handleSelectNameFilter}
                        />
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column width={3}>
                        <ProductFilter
                            activeFilter={activeFilter}
                            handleSelectFilter={handleSelectFilter}
                        />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Styled.ProductsContainer>
                            {
                                products.map((p) => (
                                    <ProductItem
                                        key={p.id}
                                        id={p.id}
                                        name={p.name}
                                        price={p.price}
                                        image={p.image}
                                        addProductToCart={addProductToCart}
                                    />
                                ))
                            }
                        </Styled.ProductsContainer>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    )
};

export { FilterList };
