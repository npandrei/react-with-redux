import { push } from 'react-router-redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory, createHashHistory } from 'history';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

export function navigateTo(param) {
    const { url = '', query = {}, state = {}, fullReload = false, delay = 100 } = param;

    const pushObj = {
        pathname: url,
        state,
        query
    }

    if (!fullReload) {
        return push(pushObj);
    } else {
        let newUrl = location;
        const keys = Object.keys(query);
        if (keys.length > 0) {
            newUrl += '?';
        }

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            newUrl += encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);

            if (i < keys.length - 1) {
                newUrl += '&';
            }
        }

        return (dispatcher) => {
            setTimeout(() => {
                    _APP.goToPage(newUrl, true);    
                },
                delay);
        }
    }
}

export function configureApp(containerId, routes, reducer) {
    if (document.getElementById(containerId)) {
        let history = useRouterHistory(createHistory)({ basename: '/' });
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