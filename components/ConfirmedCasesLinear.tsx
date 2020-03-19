import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import React from "react";
import {
  availableStatesUIData,
  CaseRecordsByState
} from "../redux/store";

const ConfirmedCasesLinear = (props: {
  confirmedData: CaseRecordsByState;
  availableStates: availableStatesUIData;
  selectedStates: string[];
}) => {
  const massagedData: any = {};
  const stateNames = Object.keys(props.availableStates);
  const dates = Object.keys(props.confirmedData[stateNames[0]]);

  dates.forEach(date => {
    massagedData[date] = {
      name: date
    };
  });

  props.selectedStates.forEach( stateName => {
    dates.forEach(date => {
      massagedData[date][stateName] = props.confirmedData[stateName][date];
    });
  });

  return (
    <div>
      <p>Confirmed Cases</p>
      <LineChart
        height={400}
        width={600}
        data={Object.values(massagedData)}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {props.selectedStates.map((stateName: string) => {
          const color = props.availableStates[stateName].color;
          return (
            <Line
              key={stateName}
              type="monotone"
              dataKey={stateName}
              stroke={color}
            />
          );
        })}
      </LineChart>
    </div>
  );
};

export default ConfirmedCasesLinear;
