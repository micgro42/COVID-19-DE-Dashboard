import ConfirmedCasesLinear from "../components/ConfirmedCasesLinear";
import { ApplicationState } from "../redux/store";
import StateSelector from "./StateSelector";

export default function Dashboard(props: ApplicationState) {
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
          // @ts-ignore
        changeSelectedStates={props.changeSelectedStates}
      />
    </div>
  );
}
