import { Route, IndexRoute } from 'react-router';
import { configureApp } from './utils/utils.js';

import reducer from './reducers/demo.js';
import AppContainer from './containers/app.js';
import HomeContainer from './containers/home.js';
import HomeEditContainer from './containers/home-edit.js';

configureApp(
    'demo-index',
    () => (
            <Route path={`(/)`} component={AppContainer}>
                <Route path={`home(/)`} component={HomeContainer} />
                <Route path={`home-edit(/)`} component={HomeEditContainer} />
            </Route>
        )
    ,
    reducer);
