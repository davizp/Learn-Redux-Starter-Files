import React from 'react';

import ReactDOM from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


// * Provider expose the store

const router = (
	<Provider store={ store }>
		<Router history={ history }>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
);

// Hot Reloading
if (module.hot) {
    module.hot.accept();
}


ReactDOM.render(router, document.getElementById('root'));