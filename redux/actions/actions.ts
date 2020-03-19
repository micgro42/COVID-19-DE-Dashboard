export const STATE_ADDED = "state added";
export const STATE_DESELECTED = "state deselected";

export function changeSelectedStates(stateName: string, added: boolean) {
  if (added) {
    return { type: STATE_ADDED, stateName };
  }
  return { type: STATE_DESELECTED, stateName };

}
