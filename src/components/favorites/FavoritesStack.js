import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from './FavoritesScreen'

const Stack = createStackNavigator()

export default function FavoritesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
