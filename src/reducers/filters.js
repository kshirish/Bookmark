const initialState = {
	tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6'],
	ratings: ['Ok', 'Good', 'Useful', 'Must']
};

const filters = (state = initialState, action) => {

	switch (action.type) {

		default: return state;
	}
}

export default filters
