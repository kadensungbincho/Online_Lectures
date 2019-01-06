import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import LoginForm from './components/LoginForm';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDg5y6Jym95B3B9toOoJSTMj5fu4HSRxqU',
      authDomain: 'manager-4aebe.firebaseapp.com',
      databaseURL: 'https://manager-4aebe.firebaseio.com',
      projectId: 'manager-4aebe',
      storageBucket: 'manager-4aebe.appspot.com',
      messagingSenderId: '1060809142011',
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
