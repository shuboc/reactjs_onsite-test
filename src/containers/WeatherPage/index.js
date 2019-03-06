import { connect } from "react-redux";
import WeatherPage from "../../components/WeatherPage";
import { weatherActions } from "../../actions";

const mapStateToProps = state => ({
  weatherData: state.weather.weatherData
});

const mapDispatchToProps = dispatch => ({
  queryWeather: city => {
    dispatch(weatherActions.queryWeather(city));
  }
});

const ConnectedWeatherPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);

export default ConnectedWeatherPage;
