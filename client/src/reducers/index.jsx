import { combineReducers } from 'redux';

import authReducer from './authReducer';
import itemreducer from './itemReducer';

export default combineReducers({
	authReducer,
    itemreducer
});