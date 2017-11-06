import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browerHistory } from 'react-router';

// import the root reducer
import { rootReducer } from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create an obj for the default data
const defaultState = {
	posts,
	comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browerHistory, store);

export default store;
