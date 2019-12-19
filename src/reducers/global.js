const INITIAL_STATE = {
  data: [
    {id: 1},
    {id: 2},
    {id: 3}
  ],
};

function DataGlobal(state = INITIAL_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}

export default {DataGlobal};
