const initialState = {
  name: "home"
};

function Actions(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'HOME':
     state.name = 'HOME hello';
     return state
     break
    default: return state;
  }
}

export default {Actions};
