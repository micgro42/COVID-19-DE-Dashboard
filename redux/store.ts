// @ts-ignore
import confirmedData from "COVID-19-DE/time_series/time-series_19-covid-Confirmed.csv";
// @ts-ignore
import deathsData from "COVID-19-DE/time_series/time-series_19-covid-Deaths.csv";
// @ts-ignore
import metaStateData from "COVID-19-DE/meta/stateMetaData.csv";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import {
  extractCasesFromTimeline,
  extractStatePopulationFromMetaData
} from "./extractors/extractCases";

export interface CaseRecordsByState {
  [stateName: string]: {
    [isoDate: string]: number;
  };
}

export interface StatePopulationData {
  [stateName: string]: number;
}

interface ApplicationState {
  availableStates: {
    [stateName: string]: {
      color: string;
    };
  };
  selectedStates: [];
  statePopulation: StatePopulationData;
  confirmed: CaseRecordsByState;
  deaths: CaseRecordsByState;
}

// FIXME: add remaining members to preloaded state
// @ts-ignore
const preloadedState: ApplicationState = {
  statePopulation: extractStatePopulationFromMetaData(metaStateData),
  confirmed: extractCasesFromTimeline(confirmedData),
  deaths: extractCasesFromTimeline(deathsData)
};

const store = configureStore({
  reducer: rootReducer
  // preloadedState
});

export default store;
