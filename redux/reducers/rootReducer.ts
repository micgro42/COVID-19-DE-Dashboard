import { combineReducers } from 'redux';
import {
  availableStatesUIData,
  CaseRecordsByState,
  StatePopulationData,
} from '../store';
import selectedStates from './selectedStates';

const rootReducer = combineReducers({
  availableStates: (previousState: availableStatesUIData = {}) => previousState,
  selectedStates,
  statePopulation: (previousState: StatePopulationData = {}) => previousState,
  confirmed: (previousState: CaseRecordsByState = {}) => previousState,
  deaths: (previousState: CaseRecordsByState = {}) => previousState,
});

export default rootReducer;
