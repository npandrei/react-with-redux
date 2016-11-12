import { Route, IndexRoute } from 'react-router';
import { configureApp } from './utils/utils.js';

import reducer from './reducers/demo.js';
import AppContainer from './containers/app.js';

configureApp(
    'demo-index',
    () => (
            <Route path={`(/)`}>
                <IndexRoute component={AppContainer}/>
            </Route>
        )
    ,
    reducer);
