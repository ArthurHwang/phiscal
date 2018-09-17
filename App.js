import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import Markets from './src/screens/Markets'
import WatchList from './src/screens/Watch'
import News from './src/screens/News'
import SideDrawer from './src/screens/SideDrawer'

import configureStore from './src/store/configureStore'

const store = configureStore()

// Register Screens
Navigation.registerComponent('phiscal.Markets', () => Markets, store, Provider)
Navigation.registerComponent('phiscal.WatchList', () => WatchList, store, Provider)
Navigation.registerComponent('phiscal.News', () => News, store, Provider)
Navigation.registerComponent('phiscal.SideDrawer', () => SideDrawer, store, Provider)
