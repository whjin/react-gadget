import { legacy_createStore as createStore } from "redux";

function reducer (
  state = {
    count: 1,
  },
  action
) {
  switch (action.type) {
    case "COUNT_PLUS":
      return { count: state.count + 1 };
    case "COUNT_REDUCE":
      return { count: state.count - 1 };
  }
  return state;
}

const store = createStore(reducer);

export default store;
