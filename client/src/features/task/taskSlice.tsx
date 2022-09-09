import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTasksThunk } from "./userThunk";

export interface PropsTask {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface Props {
  tasks: PropsTask[];
  isLoading: boolean;
}

const initialState = {
  tasks: [],
  isLoading: false,
};

export const getAllTasks = createAsyncThunk(
  "allTasks/getTasks",
  getAllTasksThunk
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTasks.pending, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getAllTasks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.tasks = payload;
    });
  },
});

export default tasksSlice.reducer;
