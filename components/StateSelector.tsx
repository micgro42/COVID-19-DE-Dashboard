import { AvailableStatesUIData } from '../redux/store';
import React from 'react';

export default function StateSelector({
  availableStates,
  selectedStates,
  changeSelectedStates,
}: {
  availableStates: AvailableStatesUIData;
  selectedStates: string[];
  changeSelectedStates: (stateName: string, added: boolean) => void;
}) {
  const availableStateNames = Object.keys(availableStates);

  return (
    <form>
      <ul>
        {availableStateNames.map(stateName => {
          return (
            <li key={stateName}>
              <label style={{ color: availableStates[stateName].color }}>
                <input
                  type="checkbox"
                  value={stateName}
                  checked={selectedStates.includes(stateName)}
                  onChange={event =>
                    changeSelectedStates(stateName, event.target.checked)
                  }
                />
                {stateName}
              </label>
            </li>
          );
        })}
      </ul>
    </form>
  );
}
