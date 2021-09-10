import styled from 'styled-components';
import { Grid, Icon } from 'semantic-ui-react';

const GridMainWrap = styled(Grid)`
    width: 100%;
    height: auto;
    margin: 2rem 0;
`;

const GridColumn = styled(Grid.Column)`
    textAlign: left;
`;

const ProductsContainer = styled.div`
    height: auto;
    text-align: left;
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: space-around;
`;

const SortIcon = styled(Icon)`
    width: 6rem !important;
`;

export { GridColumn, GridMainWrap, ProductsContainer, SortIcon };
