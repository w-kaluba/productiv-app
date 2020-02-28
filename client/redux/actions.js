export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_WORK_TIMER = "SET_WORK_TIMER";

export const addTask = task => ({
  type: ADD_TASK,
  payload: task
});

export const deleteTask = task => ({
  type: DELETE_TASK,
  payload: task
});

export const setWorkTimer = workTime => ({
  type: SET_WORK_TIMER,
  payload: workTime
});
