import { addDx } from '../actions/pmhx.js';

const INITIAL_STATE = {
	pmhx: {}
};

const pmhx = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case addDx:
			return {
				value: state.value
			};
		default: 
			return state;

	}
}

export default pmhx; 