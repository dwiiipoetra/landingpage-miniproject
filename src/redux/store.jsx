import { legacy_createStore as createStore } from "redux";
import counterReducer from "./Counter/counter.reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  counter: counterReducer,
});

function saveToLocalStorage(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("cart", serializedState);
}

function loadFromLocalStorage() {
  const serializedState = localStorage.getItem("cart");
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
}

const presistedState = loadFromLocalStorage();
const store = createStore(reducer, presistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
