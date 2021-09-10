import { VFC } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Pagination } from 'semantic-ui-react';

interface IProductPagination {
    page: number;
    currentPage: number;
    handlePagination: (arg0: number | unknown) => void;
};

const ProductPagination: VFC<IProductPagination> = ({
    page,
    currentPage,
    handlePagination
}) => {

    const itemsPagination = [];

    for (let i = 0; i < page; i++) {
      const link = (<NavLink to={`?page=${i + 1}`}>{i + 1}</NavLink>);
      itemsPagination.push(
        <Menu.Item
          as="a"
          key={i}
          onClick={()=>handlePagination(i +1)}
        >
          {link}
        </Menu.Item>,
      );
    }
    return (
        <Menu as="ul" className="page-bar sb-menu" pagination>
        <Pagination
          totalPages={page}
          onPageChange={(e, data: unknown)=>handlePagination(data)}
        />
      </Menu>
    )
};

export { ProductPagination };
