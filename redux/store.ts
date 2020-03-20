// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import confirmedData from 'COVID-19-DE/time_series/time-series_19-covid-Confirmed.csv';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import deathsData from 'COVID-19-DE/time_series/time-series_19-covid-Deaths.csv';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import stateMetaData from 'COVID-19-DE/meta/stateMetaData.csv';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import {
  extractCasesFromTimeline,
  extractListOfStatesFromMetaData,
  extractStatePopulationFromMetaData,
} from './extractors/extractCases';

export interface CaseRecordsByState {
  [stateName: string]: {
    [isoDate: string]: number;
  };
}

export interface StatePopulationData {
  [stateName: string]: number;
}

export interface AvailableStatesUIData {
  [stateName: string]: {
    color: string;
  };
}

export interface ApplicationState {
  availableStates: AvailableStatesUIData;
  selectedStates: string[];
  statePopulation: StatePopulationData;
  confirmed: CaseRecordsByState;
  deaths: CaseRecordsByState;
}

const stateNames = extractListOfStatesFromMetaData(stateMetaData);

// Todo: wrap this in a function and write tests for it
const availableStates: AvailableStatesUIData = {};
for (const state of stateNames) {
  const hue = (360 / stateNames.length) * Object.keys(availableStates).length;
  availableStates[state] = {
    color: `hsl(${hue}, 100%, 50%)`,
  };
}

const preloadedState: ApplicationState = {
  availableStates,
  selectedStates: [...stateNames],
  statePopulation: extractStatePopulationFromMetaData(stateMetaData),
  confirmed: extractCasesFromTimeline(confirmedData),
  deaths: extractCasesFromTimeline(deathsData),
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;
