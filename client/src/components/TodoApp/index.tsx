import { Container } from "../../styles/GlobalStyles";

import { Actives, DayOfTheWeek, Temperature, Wrapper } from "./styled";

import { AiOutlinePlus } from "react-icons/ai";
import { BsCloudSun, BsCloudMoon, BsCloudLightningRain } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";

const TodoApp = () => {
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
            <BsCloudSun size="38px" />
            <div>24ºc</div>
          </figure>
          <div>Campinas SP, Brasil</div>
        </Temperature>
        <Actives>
          <RiTodoLine size="26px" />
          ativas 4/10
        </Actives>
        <DayOfTheWeek>
          <span>Seg</span>5
        </DayOfTheWeek>
      </Wrapper>
    </Container>
  );
};
export default TodoApp;
