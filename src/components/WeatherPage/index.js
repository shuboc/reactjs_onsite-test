import React, { Component } from "react";
import WeatherBlock from "../WeatherBlock";

// import './landpage.css';

export default class WeatherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      weatherData: []
    };
  }
  handleChange = event => {
    this.setState({ city: event.target.value });
  };
  render() {
    const { city } = this.state;
    const { queryWeather, weatherData } = this.props;
    return (
      <div className="weather">
        <form
          onSubmit={e => {
            e.preventDefault();
            queryWeather(city);
          }}
        >
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {weatherData.map(weather => (
          <WeatherBlock
            key={weather.id}
            name={weather.name}
            weather={weather.main}
          />
        ))}
      </div>
    );
  }
}
