import { useCallback, useEffect, useState, VFC } from "react";
import { BannerSection } from "./banner-page";
import { AboutSection } from "./about";
import * as Styled from './styles';
import { RouterProps, Products } from "../../types";
import { FilterList } from "../filters";
import { NavBar } from "../navbar";
import { ProductPagination } from "../pagination";
import { sortByField } from '../../utilities'
import { PRODUCT_CATEGORY } from '../../CONSTANTS';
import { Grid, Divider } from "semantic-ui-react";
import{ getAllProducts } from '../../api/faunadb';

type filters = {
    label: string;
    value: string
};

const HomePage: VFC = (props) => {
    let [cart, setCart] = useState<Products[]>([]);
    const [allProducts, setAllProducts] = useState<Products[]>([]);
    const [quantity] = useState(1);
    const [, setCartItem] = useState({});
    const [, setAddingToCart] = useState(false);
    const { history } = props as RouterProps;
    const [filter, setFilter] = useState('asc');
    const [ filterList ] = useState<filters[]>(PRODUCT_CATEGORY);
    const [ activeFilter, setActiveFilter ] = useState<string[]>([]);
    const [ activePage, setActivePage ] = useState<number>(1);
    const [sortBy, setSortBy] = useState('');
    let [page] = useState<number>(1);

    const handlePagination = useCallback(({activePage}: any) => {
        setActivePage(activePage);
        history.push(`?page=${activePage}`);
    }, []);

    const handleAddToCart = (productId: string): void => {
        const cartItem = allProducts.find(({ id }) => id === productId);

        cartItem && setCartItem(cartItem);
        cartItem && setCart([...cart, cartItem])
    };

    const handleRemoveFromCart = (id: string) => {
        cart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(cart);

        let product = cart.find( item => item.id === id);
        return product ? null : setAddingToCart(false)
    };

    const handleSelectPriceFilter = (filter: string) => {
        setSortBy('price');
        setFilter(filter);
    }

    const handleSelectNameFilter = () => {
        setSortBy('name');
        filter === 'asc' ? setFilter('desc') : setFilter('asc');
    }

    const itemsTotal = allProducts.length;

    if (itemsTotal <= 6) {
        page = 1;
    } else if (itemsTotal % 6 !== 0) {
        page = Math.floor(itemsTotal / 6) + 1;
    } else {
        page = itemsTotal / 6;
    }

    let productDisplay;
    productDisplay = allProducts.slice((activePage - 1) * 6, activePage * 6);

    productDisplay = productDisplay.sort(sortByField(sortBy, filter));

    const handleSelectFilter = useCallback((filter: string) => {
        if (filter === "ALL") {
            if (activeFilter.length === filterList.length) {
                setActiveFilter([]);
            } else {
                setActiveFilter(filterList.map(filter => filter.value))
            }
            } else {
                if (activeFilter.includes(filter)) {
                    const filterIndex = activeFilter.indexOf(filter);
                    const newFilter = [...activeFilter];
                    newFilter.splice(filterIndex, 1);
                    setActiveFilter(newFilter)
                } else {
                    setActiveFilter([...activeFilter, filter])
                }
            }
    }, [activeFilter, filterList]);

    let filteredList;
    if (
        activeFilter.length === 0 ||
        activeFilter.length === filterList.length
    ) {
        filteredList = productDisplay;
    } else {
        filteredList = productDisplay.filter(item =>
        activeFilter.includes(item.category));
    }

    useEffect(() => {
        getAllProducts.then((res: any) => {
            setAllProducts(res[0].data.products)
        });
    }, []);

    return (
        <>
            <NavBar
                cart={cart}
                quantity={quantity}
                handleRemoveFromCart={handleRemoveFromCart}
            />
            <Styled.HomePageContainer>
                <BannerSection />
                <AboutSection products={allProducts} />
                <Styled.SectionBreak>
                    <Divider section />
                </Styled.SectionBreak>
                <FilterList
                    activeFilter={activeFilter}
                    products={filteredList}
                    addProductToCart={handleAddToCart}
                    handleSelectNameFilter={handleSelectNameFilter}
                    handleSelectPriceFilter={handleSelectPriceFilter}
                    handleSelectFilter={handleSelectFilter}
                />
                <Grid>
                    <Grid.Column textAlign="center">
                        <ProductPagination
                            page={page}
                            currentPage={activePage}
                            handlePagination={handlePagination}
                        />
                    </Grid.Column>
                </Grid>
            </Styled.HomePageContainer>
        </>
    )
};

export { HomePage };
