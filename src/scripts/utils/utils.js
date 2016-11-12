import { push } from 'react-router-redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory, createHashHistory } from 'history';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

export function navigateTo(param) {
    const { url = '', query = {}, state = {} } = param;

    const pushObj = {
        pathname: url,
        state,
        query
    }

    return push(pushObj);
}

export function configureApp(containerId, routes, reducer) {
    if (document.getElementById(containerId)) {
        let history = useRouterHistory(createHashHistory)({ basename: '/' });
        let middleware = routerMiddleware(history);
        let store = applyMiddleware(thunk, middleware)(createStore)(reducer);
        history = syncHistoryWithStore(history, store);

        //history.listen(location => console.log(location.pathname));

        render(<Provider store={store}>
                    <Router history={history}>
                        {routes()}
                    </Router>
            </Provider>,
            document.getElementById(containerId));
    }
}