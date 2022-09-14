import { useEffect } from "react";
import { Container } from "../../styles/GlobalStyles";
import { Actives, DayOfTheWeek, Wrapper } from "./styled";

import Forecast from "../Forecast";

import { AiOutlinePlus } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";
import { useGlobalContext } from "../../context/appContext";
import Tasks from "../Tasks";

interface PropsTemp {
  main: { temp: number };
  name: string;
  sys: { country: string };
  weather: [{ description: string }];
}

const TodoApp = () => {
  const { tasks, getTasks } = useGlobalContext();

  useEffect(() => {}, []);

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

        <Forecast />

        <Actives>
          <RiTodoLine size="26px" />
          tarefas 3/{tasks.length}
        </Actives>
        <DayOfTheWeek>
          <span>Seg</span>5
        </DayOfTheWeek>
      </Wrapper>

      <Tasks />
    </Container>
  );
};
export default TodoApp;
