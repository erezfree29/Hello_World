/* eslint-disable react/require-default-props */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <div className="greeting" style={{ marginLeft: '300px' }}>
            <Greeting />
          </div>
        </>
      </Provider>
    );
  }
}

export default App;
