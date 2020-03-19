import {availableStatesUIData, CaseRecordsByState, StatePopulationData} from "../redux/store";
import {Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";

const ConfirmedCasesPerPop = ( props: {
    confirmedData: CaseRecordsByState,
    availableStates: availableStatesUIData,
    selectedStates: string[];
    statePopulation: StatePopulationData;
} ) => {
    const massagedData: any = {};
    const stateNames = Object.keys(props.availableStates);
    const dates = Object.keys(props.confirmedData[stateNames[0]]);

    dates.forEach(date => {
        massagedData[date] = {
            name: date
        };
    });

    props.selectedStates.forEach( stateName => {
        const statePopMillion = props.statePopulation[stateName]/1000000;
        dates.forEach(date => {
            massagedData[date][stateName] = Math.round(
                props.confirmedData[stateName][date]/statePopMillion
            );
        });
    });

    return (
        <div>
            <p>Confirmed Cases per 1M population</p>
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

export default ConfirmedCasesPerPop;
