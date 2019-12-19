const initialState = {
  data: [
    {id: 1},
    {id: 2},
    {id: 3}
  ],
  profile: {name: 'aimad'},
  profile1: 'rien'
};

function DataGlobal(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'PROFILE':
     state.profile1 = 'hello';
     return state
     break
   case 'AUTH':
    state.profile1 = 'hello AUTH';
    return state
    break
    default: return state;
  }
}

export default DataGlobal;
