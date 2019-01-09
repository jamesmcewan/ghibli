import styled from 'styled-components';
import breakpoints from './breakpoints';

const StyledContent = styled.main`
  background: #fff;
  color: #000;
  box-sizing: border-box;
  padding: 1.6rem;

  @media screen and (min-width: ${breakpoints.medium}) {
  padding: 2.6rem;
  }

  @media screen and (min-width: ${breakpoints.large}) {

  max-height: 100vh;
  overflow:auto;
  }
`;

export default StyledContent;