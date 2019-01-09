export interface FilmProps {
  description: string;
  director: string;
  id: string,
  release_date: string;
  title: string;
}

export interface FilmsProps {
  films: FilmProps[];
}
