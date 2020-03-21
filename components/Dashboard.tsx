import ConfirmedCasesLinear from '../components/ConfirmedCasesLinear';
import { ApplicationState } from '../redux/store';
import StateSelector from './StateSelector';
import ConfirmedCasesPerPop from './ConfirmedCasesPerPop';
import React from 'react';
import ConfirmedCasesLinear2 from './ConfirmedCasesLinear2';
import { defaults } from 'react-chartjs-2';

defaults.global.tooltips = {
  ...defaults.global.tooltips,
  enabled: true,
  mode: 'index',
  position: 'average',
  intersect: false,
  titleFontSize: 18,
  bodyFontSize: 18,
};

export default function Dashboard(
  props: ApplicationState & {
    changeSelectedStates: (stateName: string, added: boolean) => void;
  },
) {
  return (
    <div>
      <div
        style={{
          width: '45vw',
          height: '600px',
          float: 'right',
          margin: '0 4em 0 0',
        }}
      >
        <ConfirmedCasesLinear2
          confirmedData={props.confirmed}
          availableStates={props.availableStates}
          selectedStates={props.selectedStates}
        />
      </div>
      <div style={{ display: 'inline-block' }}>
        <ConfirmedCasesLinear
          confirmedData={props.confirmed}
          availableStates={props.availableStates}
          selectedStates={props.selectedStates}
        />
      </div>
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
