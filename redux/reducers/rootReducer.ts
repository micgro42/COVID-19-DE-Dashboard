import { combineReducers } from "redux";
import {availableStatesUIData, CaseRecordsByState, StatePopulationData} from "../store";

const rootReducer = combineReducers({
  availableStates: (previousState: availableStatesUIData = {}) => previousState,
  selectedStates: (previousState: string[] = []) => previousState,
  statePopulation: (previousState: StatePopulationData = {}) => previousState,
  confirmed: (previousState: CaseRecordsByState = {}) => previousState,
  deaths: (previousState: CaseRecordsByState = {}) => previousState
});

export default rootReducer;
