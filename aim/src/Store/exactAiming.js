import { createAction, createReducer } from "redux-smart-actions";

const currentBallAction = createAction("set_step", (ballInfo) => ({
  payload: ballInfo,
}));

const initialState = {
  ballInfo: "",
};

const reducer = createReducer(
  {
    [currentBallAction]: (state, action) => ({
      ...state,
      ballInfo: action.payload,
    }),
  },
  initialState
);

export { currentBallAction };
export default {
  reducer,
};
