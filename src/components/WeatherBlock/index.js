import React from "react";

import "./index.scss";

const WeatherRow = ({ name, value }) => {
  return (
    <div className="WeatherRow">
      {name} : {value}
    </div>
  );
};

const WeatherBlock = ({ name, weather }) => {
  return (
    <div className="WeatherBlock">
      <div className="name">{name}</div>
      {Object.entries(weather).map(row => (
        <WeatherRow key={row[0]} name={row[0]} value={row[1]} />
      ))}
    </div>
  );
};

export default WeatherBlock;
