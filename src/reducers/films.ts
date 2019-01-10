import { GET_FILMS, ERROR } from '../actions/actions';

const initialState = {
  films: [],
  filmsLoaded: false
};

const films = (state = initialState, action: any) => {
  const { type, data } = action;

  switch (type) {
    case GET_FILMS:
      return {
        ...state,
        films: data,
        filmsLoaded: true
      };
    case ERROR:
      return state;
    default:
      return state;
  }
};

export default films;
