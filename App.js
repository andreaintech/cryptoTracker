import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CoinsStack from './src/components/coins/CoinsStack'

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>

      <Tabs.Navigator>
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
