import { Line } from 'react-chartjs-2';
import React from 'react';
import { AvailableStatesUIData, CaseRecordsByState } from '../redux/store';

const ConfirmedCasesLinear2 = (props: {
  confirmedData: CaseRecordsByState;
  availableStates: AvailableStatesUIData;
  selectedStates: string[];
}) => {
  const massagedData: any = {};
  const stateNames = Object.keys(props.availableStates);
  const dates = Object.keys(props.confirmedData[stateNames[0]]);

  dates.forEach(date => {
    massagedData[date] = {
      name: date,
    };
  });

  props.selectedStates.forEach(stateName => {
    dates.forEach(date => {
      massagedData[date][stateName] = props.confirmedData[stateName][date];
    });
  });

  const datasets = props.selectedStates.map(stateName => ({
    data: Object.values(props.confirmedData[stateName]),
    label: stateName,
    borderColor: props.availableStates[stateName].color,
    backgroundColor: props.availableStates[stateName].color,
    fill: false,
  }));

  const data = {
    datasets: datasets,
    labels: dates,
  };

  return (
    <div>
      <p>Confirmed Cases react-chartjs-2</p>
      <Line
        data={data}
        height={400}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default ConfirmedCasesLinear2;
