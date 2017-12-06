import { combineReducers } from 'redux';
import logged from './logged';
import misc from './misc';
import filters from './filters';
import sort from './sort';
import list from './list';

const reducers = combineReducers({
	misc,
	logged,
	filters,
	sort,
	list
});

export default reducers;