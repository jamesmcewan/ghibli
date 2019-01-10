import getData from '../helpers/getData';

export const GET_FILMS = 'GET_FILMS';
export const ERROR = 'ERROR';

export const getFilms = () => {
  return async (dispatch: any) => {
    try {
      const data = await getData();

      return dispatch({
        type: 'GET_FILMS',
        data: await data
      });
    } catch (err) {
      return dispatch({
        type: 'ERROR',
        data: `${err.toString()}`
      });
    }
  };
};
