import { initialState, TaskProps } from "./appContext";

import { TASKS_REQUEST, TASKS_SUCCESS } from "./actions";

type ACTIONTYPE =
  | { type: "TASKS_REQUEST" }
  | { type: "TASKS_SUCCESS"; payload: [] };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  if (action.type === TASKS_REQUEST) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === TASKS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      tasks: action.payload,
    };
  }

  throw new Error(`Nenhuma action`);
};

export default reducer;
