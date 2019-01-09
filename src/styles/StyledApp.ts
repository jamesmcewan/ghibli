import styled from 'styled-components';
import breakpoints from './breakpoints';

const StyledApp = styled.div`
  font-size: 1.4rem;

  @media screen and (min-width: ${breakpoints.large}) {
  display: grid;
  grid-template-columns: minmax(400px, 630px) minmax(600px, 1fr);
  grid-gap: 26px;
  }

`;

export default StyledApp;