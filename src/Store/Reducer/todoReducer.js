import { todoActionTypes } from "../Action/todoActionType";

const INITIAL_STATE = {
  Item: "",
  TaskList: [],
  editItem: "",
};

const todoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case todoActionTypes.ADD_TASK:
      return {
        ...state,
        Item: payload,
        TaskList: [payload, ...state.TaskList],
        editItem: "",
      };
    case todoActionTypes.EDIT_TASK:
      return {
        ...state,
        editItem: payload,
      };
    case todoActionTypes.UPDATE_TASK:
      const updateItem = state.TaskList.map((name, index) => {
        return index === payload.key ? payload.item : name;
      });
      return {
        ...state,
        TaskList: updateItem,
      };

    default:
      return state;
  }
};

export default todoReducer;
