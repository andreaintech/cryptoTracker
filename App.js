import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CoinsStack from './src/components/coins/CoinsStack'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>

      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: Colors.grey,
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#20252c',
          inactiveBackgroundColor: '#20252c',
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
      </Tabs.Navigator>
    </NavigationContainer>
  )
}



export default App
