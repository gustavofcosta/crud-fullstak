import React, { createContext, ReactNode, useContext, useReducer } from "react";
import axios from "../services/axios";
import reducer from "./reducer";
import { TASKS_REQUEST, TASKS_SUCCESS } from "./actions";

interface ChildrenProps {
  children: ReactNode;
}

export interface TaskProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface InitialContextInterface {
  tasks: TaskProps[];
  isLoading: boolean;
  getTasks: () => Promise<void>;
}
export const initialState = {
  tasks: [],
  isLoading: false,
  getTasks: () => Promise<void>,
};

export const AppContext = createContext<InitialContextInterface>(initialState);

export const AppProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTasks = async () => {
    dispatch({ type: TASKS_REQUEST });

    try {
      const { data } = await axios.get("/tasks");
      dispatch({ type: TASKS_SUCCESS, payload: data });
    } catch (error) {}
  };

  return (
    <AppContext.Provider value={{ ...state, getTasks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
