import { Header, Image } from 'semantic-ui-react';
import * as Styled from './styles';
import whiteShirt from '../../assets/images/white-shirts.jpg'

const BannerSection = () => {
    return (
        <>
            <Header as='h3'>Bejamas Product Home</Header>
            <Styled.BannerImage >
                <Image src={whiteShirt} />
            </Styled.BannerImage>
        </>
    )
};

export { BannerSection };
