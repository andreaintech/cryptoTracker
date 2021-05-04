import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CoinsScreen from '../coins/CoinsScreen'
import CoinDetailScreen from '../coin-detail/CoinDetailScreen'
import Colors from '../../res/colors'

const Stack = createStackNavigator()

export default function CoinsStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl,
                },
                headerTintColor: Colors.white
            }}
        >
            <Stack.Screen
                name="CoinsScreen"
                component={CoinsScreen}
            />
            <Stack.Screen
                name="CoinDetail"
                component={CoinDetailScreen}
            />
        </Stack.Navigator>
    )
}