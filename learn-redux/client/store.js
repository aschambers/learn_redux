import { createStore, compse } from 'redux';
// allows us to hook up our react-router with redux.
import { syncHistoryWithStore } from 'react-router-redux';
// allows us to not have to refresh the page to see new page changes.
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// we need some default data to work with it. 
import comments from './data/comments';
import posts from './data/posts';

// create an object for our default data.
// if name is the same, like posts : posts, we only need the name in es6.
const defaultState = {
	posts
	comments
};

// get store up and running, needs reducer and a default state.
export const store = createStore(rootReducer, defaultState);

// need the history to keep track of where we've gone and accessible to other files, the browserHistory.
export const history = syncHistoryWithStore(browserHistory);

export default store;