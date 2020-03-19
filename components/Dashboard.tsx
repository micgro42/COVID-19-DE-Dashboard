import ConfirmedCasesLinear from "../components/ConfirmedCasesLinear";
import {ApplicationState} from "../redux/store";

export default function Dashboard(props:ApplicationState) {
    // console.log(props.availableStates);

    // console.log(foo);
    // @ts-ignore
    // console.log(this.props);

    return (
        <div>
            <ConfirmedCasesLinear
                confirmedData={props.confirmed}
                availableStates={props.availableStates}
                selectedStates={props.selectedStates}
            />
        </div>
    );
}
