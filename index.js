import React from 'react'

import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import App from './App'
import startMainTabs from './src/screens/startMainTabs'

startMainTabs()

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('phiscal', () => RNRedux)
