import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CoinsScreen from '../coins/CoinsScreen'
import CoinDetailScreen from '../coins/CoinDetailScreen'

const Stack = createStackNavigator()

export default function CoinsStack() {
    return (
        <Stack.Navigator>
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