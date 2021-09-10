import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

const StyledCard = styled(Card)`
    padding: 3rem;

    :last-of-type {
        padding-bottom: 0;
    }
`;

const StyledCardHeader = styled(Card.Header)`
    font-size: 0.8125rem;
    font-weight: 600;
`;

const StyledCardContentTool = styled(Card.Content)`
    :hover {
        color: rgba(232,173,159,1.0) !important;
    };
    last-child {
        display: inline-block;
        margin-left: 10px;
        &:hover {
          color: rgba(103,122,146,1.0);
        }
    };
    cursor: pointer;
`;

const StyledCardContentInfo = styled(Card.Content)`
    height: 80px;
    a {
        display: inline-block;
        width: 100%;
        color: black;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

const PopularImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 1rem;
`;

const PopularImage = styled.img`
    height: auto;
    object-fit: cover;
    width: 100px;
`;

const ProductsItem = styled(Card)`
    width: 230px;
    height: 420px;
    margin: 18px;
    -webkit-transition: all .6s cubic-bezier(0.165,.84,.44,1);
    transition: all .6s cubic-bezier(0.165,.84,.44,1);
    border: 1px solid #D4D4D5;
    box-shadow: none;
    &:hover {
        margin-top: -20px;
        @include box-shadow (0, 10px, 30px, rgba(0,0,0,.4), -5px);
        @include translateY (0);
    }
`;

export {
    PopularImage,
    PopularImageContainer,
    ProductsItem,
    StyledCard,
    StyledCardHeader,
    StyledCardContentTool,
    StyledCardContentInfo
};
