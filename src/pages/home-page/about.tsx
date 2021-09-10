import { VFC } from 'react';
import { Grid } from 'semantic-ui-react';
import { PopularProducts } from '../product-list/popular';
import * as Styled from '../../components/primitives';
import * as Section from './styles';
import { Products } from '../../types';

interface IAboutSection {
    products: Products[]
}

const AboutSection: VFC<IAboutSection> = ({
    products
}) => (
  <Section.AboutGridContainer columns={2}>
    <Grid.Column width={12}>
      <Styled.Title>About Bejamas Product Store</Styled.Title>
      <Styled.Subtitle>Pets</Styled.Subtitle>
      <Styled.TextContainer>
        A shirt with an evil cat. A phone case with a galloping donut.
        A tote bag with a star-surfing astronaut. Whatever your thing, you
        can get art you love on super well made products. Personal, original,
        and high quality? It’s a win-win-win.
        Creative? Like money? Open a shop in minutes. For free.
        Just upload your art and designs and leave the rest to us.
        We arrange for all the printing (on over 60 quality products) and
        shipping to almost anywhere on earth. Ready? Let’s go.
      </Styled.TextContainer>
    </Grid.Column>
    <Grid.Column width={4}>
      <Styled.Title>People also buy</Styled.Title>
      <PopularProducts products={products} />
    </Grid.Column>
  </Section.AboutGridContainer>
);

export { AboutSection };
