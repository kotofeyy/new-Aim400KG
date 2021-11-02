import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import exactAiming from "./exactAiming";

export default function configureStore() {
  const reducers = combineReducers({
    // clockStore: clockStore.reducer,
    exactAiming: exactAiming.reducer,
  });

  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware()));

  return store;
}
