export function contentReducer(state = { home: '' }, action) {
    switch (action.type) {
        case 'home-content-changed' : {
            return Object.assign({}, state, { home: action.value });
        }
    }

    return state;
}