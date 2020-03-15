import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import confirmedData from "COVID-19-DE/time_series/time-series_19-covid-Confirmed.csv";
import React from "react";

const ConfirmedCasesLinear = () => {
  const massagedData = {};
  const stateNames = [];
  const dates = Object.keys(confirmedData[0]).slice(1);
  dates.forEach(date => {
    massagedData[date] = {
      name: date
    };
  });

  confirmedData.forEach(stateData => {
    const stateName = stateData.State;
    stateNames.push(stateName);
    dates.forEach(date => {
      massagedData[date][stateName] = stateData[date];
    });
  });

  return (
    <div>
      <p>Confirmed Cases in Saxony and Berlin</p>
      <LineChart
        height={400}
        width={1200}
        data={Object.values(massagedData)}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="Sachsen" stroke="#ff7300" />
        <Line type="monotone" dataKey="Berlin" stroke="#387908" />
      </LineChart>
    </div>
  );
};

export default ConfirmedCasesLinear;
