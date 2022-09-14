import { useState, useEffect } from "react";
import { Loading } from "../../styles/GlobalStyles";

import { BsCloudSun, BsCloudMoon, BsCloudLightningRain } from "react-icons/bs";
import axios from "axios";
import { Temperature } from "./styled";

const Forecast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(false);
  const [dataTemp, setDataTemp] = useState();

  const getLocation = () => {
    //setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  };

  useEffect(() => {
    getLocation();
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
    <Temperature>
      <figure>
        <BsCloudLightningRain size="38px" />
        <div>
          {}ºc
          <span> {}</span>
        </div>
      </figure>
      <div>
        {}, {}
      </div>
    </Temperature>
  );
};

export default Forecast;
