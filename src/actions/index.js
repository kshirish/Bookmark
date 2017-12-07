import Api from '../api';

export const toggleHeader = function() {
	return {
		type: 'TOGGLE_HEADER'
	};
}

export const toggleModal = function() {
	return {
		type: 'TOGGLE_MODAL'
	};
}

export const updateActiveTab = function(to) {
	return {
		type: 'UPDATE_ACTIVE_TAB',
		payload: to
	};
}

export const updateNewItem = function(payload) {
	return {
		type: 'UPDATE_NEW_ITEM_FORM',
		payload
	};
}

export const updateLogin = function(payload) {
	return {
		type: 'UPDATE_LOGIN_FORM',
		payload
	};
}


export const updateSignup = function(payload) {
	return {
		type: 'UPDATE_SIGNUP_FORM',
		payload
	};
}

export const newItemApi = function(link, tags, rating, token) {

	return function(dispatch) {
		
		dispatch({type: 'NEW_ITEM_API_REQUESTING', payload: { fetching: true, isFetched: false }});
		
		return Api.newItem(link, tags, rating, token)
			.then(function(res) {
				
				dispatch({type: 'NEW_ITEM_API_RECEIVED', payload: { fetching: false, isFetched: true, data: res.body }});
				return res;
			});
	};	
}

export const loginApi = function(username, password) {

	return function(dispatch) {
		
		dispatch({type: 'LOGIN_API_REQUESTING', payload: { fetching: true, isFetched: false }});
		
		Api.login(username, password)
			.then(function(res) {
				
				dispatch({type: 'LOGIN_API_RECEIVED', payload: { fetching: false, isFetched: true, data: res.body }});
			});
	};	
}

export const signupApi = function(fullname, username, password) {

	return function(dispatch) {
		
		dispatch({type: 'SIGNUP_API_REQUESTING', payload: { fetching: true, isFetched: false }});
		
		Api.signup(fullname, username, password)
			.then(function(res) {
				
				dispatch({type: 'SIGNUP_API_RECEIVED', payload: { fetching: false, isFetched: true, data: res.body }});
			});
	};	
}

export const fetchListApi = function(userId, token) {

	return function(dispatch) {
		
		dispatch({type: 'FETCH_LIST_API_REQUESTING', payload: { fetching: true, isFetched: false }});
		
		Api.fetchList(userId, token)
			.then(function(res) {
				
				dispatch({type: 'FETCH_LIST_API_RECEIVED', payload: { fetching: false, isFetched: true, data: res.body }});
			});
	};	
}

export const fetchFiltersApi = function(token) {

	return function(dispatch) {
		
		dispatch({type: 'FETCH_FILTERS_API_REQUESTING', payload: { fetching: true, isFetched: false }});
		
		Api.fetchFilters(token)
			.then(function(res) {
				
				dispatch({type: 'FETCH_FILTERS_API_RECEIVED', payload: { fetching: false, isFetched: true, data: res.body }});
			});
	};	
}