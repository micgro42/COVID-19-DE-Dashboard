import { STATE_ADDED, STATE_DESELECTED } from '../actions/actions';

export default function selectedStates(
  previousState: string[] = [],
  action: any,
): any {
  switch (action.type) {
    case STATE_ADDED:
      return [...previousState, action.stateName].sort();
    case STATE_DESELECTED:
      return previousState.filter(stateName => stateName !== action.stateName);
    default:
      return previousState;
  }
}
