// need react module
import React from 'react';
// need just the render method from react-dom package to render out to html.
import { render } from 'react-dom';
// import the css, webpack handles css loading for us.
import css from './styles/style.styl';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
	<Router history={browserHistory}>
		{/* with push state [history={browserHistory}] it immediately swap out the different components on page load */}
		<Route path="/" component={Main}>
			{/* Main children route */}
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>
)
// get something rendered on screen to test it's working.
render(router, document.getElementById('root'));
