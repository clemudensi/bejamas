import { VFC } from 'react';
import { Menu } from 'semantic-ui-react';
import { CheckboxInput } from '../../components/checkbox';
import { PRODUCT_CATEGORY } from '../../CONSTANTS';

interface IProductFilter {
    activeFilter: string[]
    handleSelectFilter: (filter: string) => void;
}

const ProductFilter: VFC<IProductFilter> = ({
  activeFilter,
  handleSelectFilter
}) => {
    return (
        <>
            <Menu text vertical>
              <Menu.Item>
              <CheckboxInput
                label="All"
                handleSelectFilter={handleSelectFilter}
                filter="ALL"
            />
            {
                PRODUCT_CATEGORY.map(item => (
                    <Menu.Item key={item.label}>
                      <CheckboxInput
                        activeFilter={activeFilter}
                        label={item.label}
                        handleSelectFilter={handleSelectFilter}
                        filter={item.value}
                      />
                    </Menu.Item>
                ))
            }
              </Menu.Item>
            </Menu>
        </>
    )
};

export { ProductFilter };
