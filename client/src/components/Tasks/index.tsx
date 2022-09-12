import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../../services/axios";
import { Loading } from "../../styles/GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../../store";
import { getAllTasks, PropsTask } from "../../features/task/taskSlice";

const Tasks = () => {
  const { isLoading, tasks } = useSelector((store: RootState) => store.tasks);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  if (isLoading) {
    return (
      <Loading>
        <div className="loading"></div>
      </Loading>
    );
  }

  return (
    <div>
      <h1 className="title">Todas as tarefas</h1>
      <div>
        {tasks.map((task: PropsTask) => {
          const { id, title, isCompleted } = task;
          return <div key={id}>{title}</div>;
        })}
      </div>
    </div>
  );
};
export default Tasks;
