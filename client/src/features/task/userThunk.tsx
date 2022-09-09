import { toast } from "react-toastify";
import axios from "../../services/axios";
import { AppThunk } from "../../store";

export const getAllTasksThunk = async () => {
  try {
    const { data } = await axios.get("/tasks");
    toast.success("tudo certo na requisição");
    return data;
  } catch (error) {}
};
