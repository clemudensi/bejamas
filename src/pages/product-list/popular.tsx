import { useMemo, VFC } from "react";
import { Products } from "../../types";
import * as Styled from './styles';
import { Image } from 'semantic-ui-react'

interface IPopularProducts {
    products: Products[];
}

const PopularProducts: VFC<IPopularProducts> = ({
    products
}) => {
    const popular = useMemo(() => products.filter((item: Products) => item.bestseller).slice(0, 3), [products]);

    return (
        <>
            <Image.Group>
                {
                    popular.map((item) => (
                        <Styled.PopularImage src={item.image.src} key={item.id} />
                    ))
                }
            </Image.Group>
        </>
    )
};

export { PopularProducts };
