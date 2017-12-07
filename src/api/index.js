import request from 'superagent';

const newItem = function(link, tags, rating, token) {
	return request.post('/api/v1/items')
		.set('x-access-token', token)
		.send({link, tags, rating});
};

const login = function(username, password) {
	return request.post('/api/v1/authenticate')
		.send({username, password});
};

const signup = function(fullname, username, password) {
	return request.post('/api/v1/users')	
		.send({fullname, username, password});
};

const fetchFilters = function(token) {
	return request.get('/api/v1/filters')
		.set('x-access-token', token);
};

const fetchList = function(userId, token) {
	return request.get(`/api/v1/items/user/${userId}`)
		.set('x-access-token', token);
};

export default {
	newItem,
	login,
	signup,
	fetchList,
	fetchFilters
};