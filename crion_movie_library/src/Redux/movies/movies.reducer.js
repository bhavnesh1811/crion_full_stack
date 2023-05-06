import {
  ADD_MOVIES_ERROR,
  ADD_MOVIES_LOADING,
  ADD_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  UPDATE_MOVIES_ERROR,
  UPDATE_MOVIES_LOADING,
  UPDATE_MOVIES_SUCCESS,
  DELETE_MOVIES_ERROR,
  DELETE_MOVIES_LOADING,
  DELETE_MOVIES_SUCCESS,
} from "./movies.actiontypes";

const initialState = {
  movies: [],
  loading: false,
  error: false,
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_MOVIES_SUCCESS: {
      return { ...state, loading: false, error: false, movies: payload.movies };
    }
    case GET_MOVIES_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case ADD_MOVIES_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case ADD_MOVIES_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case ADD_MOVIES_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case UPDATE_MOVIES_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case UPDATE_MOVIES_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case UPDATE_MOVIES_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case DELETE_MOVIES_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case DELETE_MOVIES_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case DELETE_MOVIES_ERROR: {
      return { ...state, loading: false, error: true };
    }

    default: {
      return initialState;
    }
  }
};

export default movieReducer;
