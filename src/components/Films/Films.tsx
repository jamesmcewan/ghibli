import React from 'react';
import { FilmProps, FilmsProps } from '../../interfaces/films';
import Film from '../Film/Film';
import StyledContent from '../../styles/StyledContent';

const Films = ({ films }: FilmsProps) => (
  <StyledContent>
    {films &&
      films.map((film: FilmProps) => <Film {...film} key={film.id} />)}
  </StyledContent>
);

Films.defaultProps = {
  films: []
};

export default Films;
