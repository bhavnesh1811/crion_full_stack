import axios from "axios";
import {
  ADD_MOVIES_ERROR,
  ADD_MOVIES_LOADING,
  ADD_MOVIES_SUCCESS,
  DELETE_MOVIES_ERROR,
  DELETE_MOVIES_LOADING,
  DELETE_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  UPDATE_MOVIES_ERROR,
  UPDATE_MOVIES_LOADING,
  UPDATE_MOVIES_SUCCESS,
} from "./movies.actiontypes";

//Get All Movies
export const getMovies = () => async (dispatch) => {
  dispatch({ type: GET_MOVIES_LOADING });
  try {
    let data = await axios.get(`https://weak-tuna-houndstooth.cyclic.app/movies`);
    data = data.data;
    // console.log(data);
    dispatch({ type: GET_MOVIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_MOVIES_ERROR });
  }
};

export const getMoviesBySearch = (search) => async (dispatch) => {
  dispatch({ type: GET_MOVIES_LOADING });
  try {
    let data = await axios.get(`https://weak-tuna-houndstooth.cyclic.app/movies?search=${search}`);
    data = data.data;
    // console.log(data);
    dispatch({ type: GET_MOVIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_MOVIES_ERROR });
  }
};

//Add Movie
export const addMovies = (data) => async (dispatch) => {
  dispatch({ type: ADD_MOVIES_LOADING });
  try {
    await axios.post(`https://weak-tuna-houndstooth.cyclic.app/movies/add`, data);
    dispatch({ type: ADD_MOVIES_SUCCESS });
    dispatch(getMovies());
  } catch (error) {
    dispatch({ type: ADD_MOVIES_ERROR });
  }
};

//Update movie
export const editMovies = (data, id) => async (dispatch) => {
  dispatch({ type: UPDATE_MOVIES_LOADING });
  try {
    await axios.patch(`https://weak-tuna-houndstooth.cyclic.app/movies/update/${id}`, data);
    dispatch({ type: UPDATE_MOVIES_SUCCESS });
    dispatch(getMovies());
  } catch (error) {
    dispatch({ type: UPDATE_MOVIES_ERROR });
  }
};

//Delete movie
export const deleteMovies = (id) => async (dispatch) => {
  dispatch({ type: DELETE_MOVIES_LOADING });
  try {
    await axios.delete(`https://weak-tuna-houndstooth.cyclic.app/movies/delete/${id}`);
    // console.log(data);
    dispatch({ type: DELETE_MOVIES_SUCCESS });
    dispatch(getMovies());
  } catch (error) {
    dispatch({ type: DELETE_MOVIES_ERROR });
  }
};
