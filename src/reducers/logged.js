import { omit } from '../utils';
const initialState = {	
	fetching: false,
	isFetched: false
};

const logged = (state = initialState, action) => {

	switch (action.type) {

		case 'LOGIN_API_REQUESTING': return { ...state, 
				fetching: true, 
				isFetched: false 
			};

		case 'LOGIN_API_RECEIVED': 
			
			const obj = omit(action.payload.data, ['message']);
			
			return { ...state, 
				fetching: false, 
				isFetched: true, 
				...obj
			};

		default: return state;
	}
}

export default logged
