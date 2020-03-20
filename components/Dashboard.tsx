import ConfirmedCasesLinear from '../components/ConfirmedCasesLinear';
import { ApplicationState } from '../redux/store';
import StateSelector from './StateSelector';
import ConfirmedCasesPerPop from './ConfirmedCasesPerPop';

export default function Dashboard(
  props: ApplicationState & {
    changeSelectedStates: (stateName: string, added: boolean) => void;
  },
) {
  return (
    <div>
      <ConfirmedCasesLinear
        confirmedData={props.confirmed}
        availableStates={props.availableStates}
        selectedStates={props.selectedStates}
      />
      <ConfirmedCasesPerPop
        confirmedData={props.confirmed}
        availableStates={props.availableStates}
        selectedStates={props.selectedStates}
        statePopulation={props.statePopulation}
      />
      <StateSelector
        availableStates={props.availableStates}
        selectedStates={props.selectedStates}
        changeSelectedStates={props.changeSelectedStates}
      />
    </div>
  );
}
