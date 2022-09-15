import { useState, useEffect } from "react";
import { Loading } from "../../styles/GlobalStyles";

import { BsCloudSun, BsCloudMoon, BsCloudLightningRain } from "react-icons/bs";
import axios from "axios";
import { Temperature } from "./styled";
import { useGlobalContext } from "../../context/appContext";

const Forecast = () => {
  const { forecast, isLoading, getForecast } = useGlobalContext();

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getForecast(position.coords.latitude, position.coords.longitude);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  console.log();

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
