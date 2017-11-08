// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {

	switch(action.type) {
		case 'INCREMENT_LIKES':
			//return updated state
			console.log('Incrementing Likes!');

			const { index } = action;

			return [
				...state.slice(0, index), // before the one we are updating
				{
					...state[index],
					likes: state[index].likes + 1
				},
				...state.slice(index + 1), // after the one we are updating
			];
			break;
		default:
			return state;
	}

	console.log('The post will change');
	console.log(state, action);

	return state;
}

export default posts;
