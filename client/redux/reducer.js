import { combineReducers } from "redux";
import {
  ADD_TASK,
  DELETE_TASK,
  SET_WORK_TIMER,
  COMPLETE_TASK,
  ADD_CATEGORY,
  DEL_CATEGORY
} from "./actions";

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

// The app keeps track of time spent using an array of completed tasks
// In future it might be more efficient to refactor this into a hash table of
// categories with the corresponding time that has been spent on each.
// It's also necessary to resolve syncing this to the backend.
const timeSpentReducer = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_TASK:
      return [...state, ...action.payload];
  }
  return state;
};

// Categories are passed through as a string and stored as a list
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case DEL_CATEGORY:
      return [...state, action.payload];
  }
  return state;
};

const reducer = combineReducers({
  categories: categoryReducer,
  tasks: taskListReducer,
  timer: timerReducer,
  timeSpent: timeSpentReducer
});

export default reducer;
