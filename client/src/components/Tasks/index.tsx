import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../../services/axios";
import { Loading } from "../../styles/GlobalStyles";

interface PropsTask {
  id: number;
  title: string;
  isCompleted: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTasks = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get("/tasks");
      setTasks(data);

      setIsLoading(false);
    } catch (error) {
      toast.error("Servidor fora do ar");

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
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
