import React from 'react';
import { FilmProps } from '../../interfaces/films';
import StyledArticle from '../../styles/StyledArticle';

const Film = ({ director, description, release_date, title }: FilmProps) => (
  <StyledArticle>
    <h1>{title}</h1>
    <h2>Dir: {director}</h2>
    <h3>Year: {release_date}</h3>
    <p>{description}</p>
  </StyledArticle>
);

export default Film;
