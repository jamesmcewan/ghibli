import React from 'react';
import totoro from '../../images/totoro.png';
import StyledHeader from '../../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <img src={totoro} alt="Studio Ghibli" />
  </StyledHeader>
);

export default Header;
