const initialState = {
	fetching: false,
	isFetched: false,
	list: []
}

const list = (state = initialState, action) => {

	switch (action.type) {

		case 'FETCH_LIST_API_REQUESTING': return { ...state, 
				fetching: true, 
				isFetched: false 
			};

		case 'FETCH_LIST_API_RECEIVED': return { ...state, 
				fetching: false, 
				isFetched: true, 
				list: state.list.concat(action.payload.data) 
			};

		case 'NEW_ITEM_API_RECEIVED': 
			const list = state.list.slice();

			list.unshift(action.payload.data);

			return { ...state, 
				fetching: false, 
				isFetched: true, 
				list
			};

		default: return state;
	}
}

export default list
