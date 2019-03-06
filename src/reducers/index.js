import { combineReducers } from "redux";
import { weatherActions } from "../actions";

const initState = {
  weatherData: []
};

const weatherReducers = (state = initState, action) => {
  switch (action.type) {
    case "QUERY_WEATHER_SUCCESS":
      return {
        ...state,
        weatherData: [...state.weatherData, action.payload]
      };

    default:
      return state;
  }
};

const reducers = combineReducers({
  weather: weatherReducers
});

export default reducers;
