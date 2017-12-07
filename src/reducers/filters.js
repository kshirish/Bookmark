const initialState = {
	fetching: false,
	isFetched: false,
	tags: [],
	ratings: []
};

const filters = (state = initialState, action) => {

	switch (action.type) {

		case 'FETCH_FILTERS_API_REQUESTING': return { ...state, 
				fetching: true, 
				isFetched: false 
			};

		case 'FETCH_FILTERS_API_RECEIVED': return { ...state, 
				fetching: false, 
				isFetched: true, 
				tags: state.tags.concat(action.payload.data.tags),
				ratings: state.tags.concat(action.payload.data.ratings)
			};

		default: return state;
	}
}

export default filters
