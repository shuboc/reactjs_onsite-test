import Axios from "axios";
import { from as rxFrom, of, defer } from "rxjs";
import { ofType } from "redux-observable";
import { mergeMap, catchError } from "rxjs/operators";

import { API } from "../api";

const from = (url, param = "") =>
  defer(() => rxFrom(Axios.get(`${url}${param}`)));

export const weatherActions = {
  queryWeather: city => ({ type: "QUERY_WEATHER", payload: city }),
  queryWeatherSuccess: weather => ({
    type: "QUERY_WEATHER_SUCCESS",
    payload: weather
  }),
  queryWeatherFailed: error => ({
    type: "QUERY_WEATHER_FAILED",
    payload: error
  })
};

const queryWeatherEpic = action$ =>
  action$.pipe(
    ofType("QUERY_WEATHER"),
    mergeMap(action =>
      from(API.queryWeather, action.payload).pipe(
        mergeMap(res => of(weatherActions.queryWeatherSuccess(res.data))),
        catchError(error => of(weatherActions.queryWeatherFailed(error)))
      )
    )
  );

export const epics = {
  queryWeatherEpic
};
