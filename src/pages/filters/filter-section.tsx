import { VFC } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import { FILTER_OPTIONS } from '../../CONSTANTS';
import * as Styled from './styles'

interface IFilterSection {
    handleSelectPriceFilter: (type: string) => void;
    handleSelectNameFilter: () => void;
}

const FilterSection: VFC<IFilterSection> = ({
    handleSelectPriceFilter,
    handleSelectNameFilter
}) => (
    <Menu position='right'>
        <Menu.Menu position='right'>
            <Dropdown item text='Price'>
            <Dropdown.Menu>
                {
                    FILTER_OPTIONS.map((option) => (
                        <Dropdown.Item
                            key={option.label}
                            onClick={() => handleSelectPriceFilter(option.value)}
                        >
                            {option.label}
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
            </Dropdown>
            <Menu.Item onClick={handleSelectNameFilter}>
                <Styled.SortIcon name="sort">Sort Item</Styled.SortIcon>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export { FilterSection };
