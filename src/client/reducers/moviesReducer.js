import { FETCH_MOVIES } from "../types";

const movieState = {
  movies: [],
  genres: []
};

export default (state = movieState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: payload
      };
    default:
      return state;
  }
};
