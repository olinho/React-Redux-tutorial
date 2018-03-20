import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// the third argument is routing
const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;