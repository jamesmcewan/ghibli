import styled from 'styled-components';
import breakpoints from './breakpoints';

const StyledHeader = styled.header`
  height: 300px;

  @media screen and (min-width: ${breakpoints.large}) {
  display: grid;
  align-content: center;
  align-items: center;
  height: 100vh;
  }

  img {
    max-width: 100%;
    max-height: 100%;

    @media screen and (min-width: ${breakpoints.large}) {
      height: auto;
      max-height: none;
    }
  }
`;

export default StyledHeader;