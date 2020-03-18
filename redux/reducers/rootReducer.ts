import {combineReducers} from 'redux';
import {CaseRecordsByState} from "../store";

const rootReducer = combineReducers({
  confirmed: ( previousState: CaseRecordsByState = {} ) => previousState,
  deaths: ( previousState: CaseRecordsByState = {} ) => previousState,
});

export default rootReducer;
