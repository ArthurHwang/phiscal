import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
// import { registerScreens } from './screens'

import Markets from './src/screens/Markets'
import WatchList from './src/screens/WatchList'
import News from './src/screens/News'
import SideDrawer from './src/screens/SideDrawer'

import configureStore from './src/store/configureStore'

// Register Screens
Navigation.registerComponent('phiscal.Markets', () => Markets)
Navigation.registerComponent('phiscal.WatchList', () => WatchList)
Navigation.registerComponent('phiscal.News', () => News)
// Navigation.registerComponent('awesome-places.PlaceDetailScreen', () => PlaceDetailScreen)
Navigation.registerComponent('phiscal.SideDrawer', () => SideDrawer)

// Start App
// export default () =>
//   Navigation.startSingleScreenApp({
//     screen: {
//       screen: 'awesome-places.AuthScreen',
//       title: 'Login',
//     },
//   })
