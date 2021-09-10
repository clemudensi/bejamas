import styled from "styled-components";
import { Item, Label } from "semantic-ui-react";

const CartLabel = styled(Label)`
    color: ${({ theme }) => theme.colors.primary.red};
`;

const EmptyCart = styled.div`
    width: 320px;
    text-align:center;
`;

const CartItems = styled(Item)`
    width: 520px !important;
`;

export {
    CartItems,
    CartLabel,
    EmptyCart
};
