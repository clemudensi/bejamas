import { VFC } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import * as Styled from './styles'

const PageLoader: VFC = () => (
  <Styled.PageLoaderContainer>
    <Dimmer active inverted>
      <Loader inline="centered" size="massive">
        Loading...
      </Loader>
    </Dimmer>
  </Styled.PageLoaderContainer>
)

export { PageLoader };
