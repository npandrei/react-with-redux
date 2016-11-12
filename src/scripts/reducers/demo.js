import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { contentReducer } from './content.js';

const reducer = combineReducers({
    routing: routerReducer,
    content: contentReducer
});

export default reducer;