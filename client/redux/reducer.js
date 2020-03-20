import { combineReducers } from "redux";
import { ADD_TASK, DELETE_TASK, SET_WORK_TIMER } from "./actions";

const taskListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log("Task Added");
      return [...state, action.payload];
    case DELETE_TASK:
      pass;
  }
  return state;
};

const timerReducer = (
  state = { workTime: 1500000, restTime: 300000 },
  action
) => {
  switch (action.type) {
    case SET_WORK_TIMER:
      return { ...state, workTime: action.payload };
  }
  return state;
};

const reducer = combineReducers({
  tasks: taskListReducer,
  timer: timerReducer
});

export default reducer;
