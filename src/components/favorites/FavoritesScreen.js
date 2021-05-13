import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../res/colors'
import FavoritesEmptyState from './FavoritesEmptyState'

const FavoritesScreen = () => {
    return (
        <View style={styles.container}>
            <FavoritesEmptyState />
        </View>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.charade,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})
