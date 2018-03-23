import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import Home from './src/components/Home';
import Chat from './src/components/Chat';

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root' style={{ paddingTop: Platform.OS === 'ios' ? 64 : 54 }}>
            <Scene key='home' component={Home} title='Home' />
            <Scene key='chat' component={Chat} title='Chat' />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
