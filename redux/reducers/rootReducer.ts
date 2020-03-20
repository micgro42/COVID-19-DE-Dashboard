import { combineReducers } from 'redux';
import {
  AvailableStatesUIData,
  CaseRecordsByState,
  StatePopulationData,
} from '../store';
import selectedStates from './selectedStates';

const rootReducer = combineReducers({
  availableStates: (previousState: AvailableStatesUIData = {}) => previousState,
  selectedStates,
  statePopulation: (previousState: StatePopulationData = {}) => previousState,
  confirmed: (previousState: CaseRecordsByState = {}) => previousState,
  deaths: (previousState: CaseRecordsByState = {}) => previousState,
});

export default rootReducer;
