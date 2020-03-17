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
      <p>Confirmed Cases</p>
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
        <Line type="monotone" dataKey="Baden-Württemberg" stroke="hsla(0, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Bayen" stroke="hsla(22, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Berlin" stroke="hsla(45, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Brandenbug" stroke="hsla(67, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Bremen" stroke="hsla(90, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Hamburg" stroke="hsla(112, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Hessen" stroke="hsla(135, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Mecklenburg-Vorpommern" stroke="hsla(157, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Niedersachsen" stroke="hsla(180, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Nordrhein-Westfalen" stroke="hsla(202, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Rheinland-Pfalz" stroke="hsla(225, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Saarland" stroke="hsla(247, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Sachsen" stroke="hsla(270, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Sachsen-Anhalt" stroke="hsla(292, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Schleswig-Holstein" stroke="hsla(315, 100%, 50%, 1)" />
        <Line type="monotone" dataKey="Thüringen" stroke="hsla(337, 100%, 50%, 1)" />
      </LineChart>
    </div>
  );
};

export default ConfirmedCasesLinear;
