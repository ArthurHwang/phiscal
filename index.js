import React from 'react'

import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import App from './App'
import startMainTabs from './src/screens/startMainTabs'

startMainTabs()
// App()

// const store = configureStore()
// console.disableYellowBox = true

const RNRedux = () => (
  <Provider>
    <App />
  </Provider>
)

AppRegistry.registerComponent('phiscal', () => RNRedux)
