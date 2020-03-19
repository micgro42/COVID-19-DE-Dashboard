import ConfirmedCasesLinear from "../components/ConfirmedCasesLinear";
import { ApplicationState } from "../redux/store";
import StateSelector from "./StateSelector";

export default function Dashboard(
  props: ApplicationState & {
    changeSelectedStates: (stateName: string, added: boolean) => void;
  }
) {
  return (
    <div>
      <ConfirmedCasesLinear
        confirmedData={props.confirmed}
        availableStates={props.availableStates}
        selectedStates={props.selectedStates}
      />
      <StateSelector
        availableStates={props.availableStates}
        selectedStates={props.selectedStates}
        changeSelectedStates={props.changeSelectedStates}
      />
    </div>
  );
}
