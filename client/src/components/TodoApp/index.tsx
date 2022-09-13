import { Container, Loading } from "../../styles/GlobalStyles";

import { Actives, DayOfTheWeek, Temperature, Wrapper } from "./styled";

import { AiOutlinePlus } from "react-icons/ai";
import { BsCloudSun, BsCloudMoon, BsCloudLightningRain } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getAllTasks, PropsTask } from "../../features/task/taskSlice";

interface PropsTemp {
  main: { temp: number };
  name: string;
  sys: { country: string };
  weather: { number: { description: string } };
}

const TodoApp = () => {
  const { tasks } = useSelector((store: RootState) => store.tasks);

  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(false);
  const [dataTemp, setDataTemp] = useState([]);

  const getForecast = async (lat: number, long: number) => {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: import.meta.env.VITE_WEATHER_KEY,
          lang: "pt_br",
          units: "metric",
        },
      }
    );
    setDataTemp(data);
  };

  const getLocation = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      await getForecast(position.coords.latitude, position.coords.longitude);
      setIsLoading(false);
      setLocation(true);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

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

  if (!location) {
    return <div>Por favor aceite a</div>;
  }

  return (
    <Container>
      <Wrapper>
        <nav>
          <div>
            Bom dia,<span> Gustavo</span>
          </div>
          <button>
            <AiOutlinePlus />
          </button>
        </nav>
        <Temperature>
          <figure>
            <BsCloudLightningRain size="38px" />
            <div>
              {dataTemp.main.temp.toFixed()}ºc
              <span> {dataTemp.weather[0].description}</span>
            </div>
          </figure>
          <div>
            {dataTemp.name}, {dataTemp.sys.country}
          </div>
        </Temperature>
        <Actives>
          <RiTodoLine size="26px" />
          tarefas 3/{tasks.length}
        </Actives>
        <DayOfTheWeek>
          <span>Seg</span>5
        </DayOfTheWeek>
      </Wrapper>
    </Container>
  );
};
export default TodoApp;
