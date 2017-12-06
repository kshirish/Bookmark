export const toggleHeader = function() {
	return {
		type: 'TOGGLE_HEADER'
	};
}

export const updateActiveTab = function(to) {
	return {
		type: 'UPDATE_ACTIVE_TAB',
		payload: to
	};
}