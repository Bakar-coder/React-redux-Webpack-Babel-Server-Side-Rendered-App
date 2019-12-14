import { FETCH_MOVIES } from "../types";

export const fetchMovies = () => async (dispatch, getState, api) => {
  const { data } = await api.get("/movies");
  // const data = getMovies();
  dispatch({ type: FETCH_MOVIES, payload: data });
};
