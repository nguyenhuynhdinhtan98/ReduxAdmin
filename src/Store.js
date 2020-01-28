var redux = require("redux");
var oldstate = {
  num: [1, 2, 3, 4, 5, 6, 7],
  status: false
};
var reducer = (state = oldstate, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, status: !state.status };
    default:
      return state;
  }
  return state;
};
var action = redux.createStore(reducer);
action.dispatch({ type: "ADD" });
console.log(action.getState());

export default action;
