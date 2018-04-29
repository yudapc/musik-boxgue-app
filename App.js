import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './app/config/routes';
import store from './app/store/store';
import { registerConnectionChange } from './app/helpers/check-connection';

registerConnectionChange();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
