const tempRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TEMP_REQUEST':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default tempRequestReducer;
