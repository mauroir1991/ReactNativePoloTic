import React from 'react';
import App from './src/AppNavigation'; //clase de navigation
import AppRedux from './src/App';//clase de redux
import { Provider } from 'react-redux';
import store from './src/redux/store';



const Main = () => {
  return (
    <Provider store={store} >
      <AppRedux />
      <App />
    </Provider>
  )
}

export default Main