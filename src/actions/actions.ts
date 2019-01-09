import getData from '../helpers/getData';

export const GET_FILMS = 'GET_FILMS';
export const ERROR = 'ERROR';

export const getFilms = () => {
  return async (dispatch: any) => {
    try {
      const jsonData = await getData();
      const { title, id, description, director, release_date } = await jsonData;

      return dispatch({
        type: 'GET_FILMS',
        data: await {
          title,
          id,
          description,
          director,
          release_date
        },
      });
    } catch (err) {
      return dispatch({
        type: 'ERROR',
        data: `${err.toString()}`,
      });
    }
  };
};
