import {combineReducers} from 'redux';
import AuthReducer from './auth-reducer';


const allReducers=combineReducers({
    auth: AuthReducer
});

export default allReducers;
