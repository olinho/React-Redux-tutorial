// a reducer takes in two things:

// 1. the action, which happened
// 2. copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log("Incrementing likes");
      const i = action.index;
      return [
          ...state.slice(0,i), // previous objects
          {...state[i], likes: state[i].likes + 1}, //
          ...state.slice(i+1), // subsequent objects
      ]
    default:
      return state;
  }
}

export default posts;