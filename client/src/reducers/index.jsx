import { combineReducers } from 'redux';

import authReducer from './authReducer';
import itemreducer from './equipmentReducer';

export default combineReducers({
	authReducer,
    itemreducer
});