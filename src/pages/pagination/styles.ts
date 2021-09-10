import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

const Paginator = styled(Menu.Item)`
    padding: 0;
    line-height: 30px;
    a {
        display:inline-block;
        width: 100%;
        height: 100%;
        color: rgba(0,0,0,.3);
        @include transition();
    }
    &.selected a,&:hover a{
        color: ${({ theme }) => theme.colors.primary.pink};
        text-decoration:none;
    }
`;

export { Paginator };
