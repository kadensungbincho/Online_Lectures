import { createStore } from './redux';

const COUNTER = 'count';
const FETCHER = 'fetch';

const middleware1 = (store) => (dispatch) => (action) => {
    console.log('middlewaere1');

    if (action.type === FETCHER) {
        console.log(FETCHER);
        setTimeout(() => {
            dispatch({
                type: 'fetch-response',
                payload: [
                    1, 2, 3
                ]
            });
        }, 2000);
    } else {
        dispatch(action);
    }
}

const middleware2 = (store) => (dispatch) => (action) => {
    console.log('middlewaere2');
    dispatch(action);
}

function reducer(state, action) {
    if (action.type === COUNTER) {
        return { ...state, counter: action.playload.counter };
    }

    if (action.type === 'fetch-response') {
        return { ...state, response: action.payload };
    }
    
    return state;
}

function listener() {
    console.log(store.getState());
}

function actionCreator(type, payload) {
    return {
        type,
        payload,
    }
}

const store = createStore(reducer, [middleware1, middleware2]);

store.subscribe(listener);

// store.dispatch(actionCreator(COUNTER, { counter: 1 }));

function counter(data) {
    store.dispatch(actionCreator(COUNTER, data));
}

counter({ counter: 1});

store.dispatch(actionCreator(FEFETCHERTCH))