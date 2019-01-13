import styled from 'styled-components';
import breakpoints from './breakpoints';

const StyledArticle = styled.article`
  margin-bottom: 52px;

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 2.5rem;
      margin-bottom: 1.3rem;
    }
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.8rem;
    text-align: justify;

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 1.6rem;
      margin-bottom: 1.3rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.8rem;
    text-align: justify;

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 1.4rem;
      margin-bottom: 1.3rem;
    }
  }

  p {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 1.4rem;
    }
  }
`;

export default StyledArticle;
