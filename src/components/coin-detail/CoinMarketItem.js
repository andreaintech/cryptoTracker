import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CoinMarketItem = (item) => {
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}

export default CoinMarketItem

const styles = StyleSheet.create({})
