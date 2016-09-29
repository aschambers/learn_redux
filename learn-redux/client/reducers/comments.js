// reducer takes in two things:

// 1. action (info about what happened).
// 2. copy of current state

// set state to be an empty array.
function comments(state = [], action) {
	console.log(state, action);
	return state;
}

export default comments;
