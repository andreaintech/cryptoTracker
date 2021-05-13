import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CoinsStack from './src/components/coins/CoinsStack'
import Colors from './src/res/colors'
import FavoritesStack from './src/components/favorites/FavoritesStack'

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>

      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: Colors.purpleLight,
          inactiveTintColor: Colors.grey,
          activeBackgroundColor: Colors.blackPearl,
          inactiveBackgroundColor: Colors.blackPearl,
          style: {
            borderTopWidth: 2,
            borderTopColor: '#888a8c'
          },
        }}
      >
        <Tabs.Screen
          name='Coins'
          component={CoinsStack}
          options={{
            activeTintColor: '#e91e63',
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{
                  tintColor: color,
                  width: size,
                  height: size,
                }}
                source={require('./src/assets/bank.png')}
              />
            )
          }}
        />
        <Tabs.Screen
          name='Favorites'
          component={FavoritesStack}
          options={{
            activeTintColor: '#e91e63',
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{
                  tintColor: color,
                  width: size,
                  height: size,
                }}
                source={require('./src/assets/star.png')}
              />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}



export default App
