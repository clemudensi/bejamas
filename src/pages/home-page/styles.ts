import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
    padding: 3rem;
`;

const BannerImage = styled.div`
    width: 100%;
    height: 40%;
`;

const SectionBreak = styled.div`
    margin: 3rem 0;
`;

const AboutGridContainer = styled(Grid)`
    padding: 3rem 0 !important;
`;

export {
    AboutGridContainer,
    BannerImage,
    HomePageContainer,
    SectionBreak
};
