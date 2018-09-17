import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { Platform } from 'react-native'

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-cash' : 'ios-map', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-eye' : 'ios-share', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-paper' : 'ios-share', 30),
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'phiscal.Markets',
          icon: sources[0],
          label: 'Markets',
          title: 'Markets',
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[1],
                title: 'Menu',
                id: 'sideDrawerToggle',
              },
            ],
          },
        },
        {
          screen: 'phiscal.WatchList',
          icon: sources[3],
          label: 'Watch',
          title: 'Watch',
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[1],
                title: 'Menu',
                id: 'sideDrawerToggle',
              },
            ],
          },
        },
        {
          screen: 'phiscal.News',
          icon: sources[4],
          label: 'News',
          title: 'News',
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[1],
                title: 'Menu',
                id: 'sideDrawerToggle',
              },
            ],
          },
        },
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: 'red',
      },
      appStyle: {
        tabBarSelectedButtonColor: 'red',
      },
      drawer: {
        left: {
          screen: 'phiscal.SideDrawer',
        },
        style: {},
      },
    })
  })
}

export default startTabs
