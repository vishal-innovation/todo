import { type } from "@testing-library/user-event/dist/type";
import { todoActionTypes } from "./todoActionType";

export const addItem = (data) => {
  return (dispatch) => {
    dispatch({
      type: todoActionTypes.ADD_TASK,
      payload: data,
    });
  };
};

export const editTodoItem = (data) => {
  return (dispatch) => {
    dispatch({
      type: todoActionTypes.EDIT_TASK,
      payload: data,
    });
  };
};

export const updateTodoItem = (data) => {
  return (dispatch) => {
    dispatch({
      type: todoActionTypes.UPDATE_TASK,
      payload: data,
    });
  };
};
