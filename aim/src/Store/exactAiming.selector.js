import { createSelector } from "reselect";

function getBallStore(state) {
  return state.exactAiming;
}

const getClick = createSelector(
  getBallStore,
  (exactAiming) => exactAiming.ballInfo
);

export { getClick };

export default getBallStore;
