import React from 'react'
import { View, Text, StyleSheet, Image, Platform, Pressable } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function CoinsItem({ item, onPress }) {

    const getImageArrow = () => {
        if (item.percent_change_1h > 0) {
            return require('../../assets/arrow_up.png')
        } else {
            return require('../../assets/arrow_down.png')
        }
    }

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.nameText}>{`$${item.price_usd}`}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
                <Image
                    source={getImageArrow()}
                    style={styles.imageArrow}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 16,
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
        marginLeft: Platform.OS === 'ios' ? 16 : 0,
        paddingLeft: Platform.OS === 'ios' ? 0 : 16
    },
    row: {
        flexDirection: 'row'
    },
    symbolText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 12
    },
    nameText: {
        color: Colors.white,
        fontSize: 14,
        marginRight: 16
    },
    priceText: {
        color: Colors.white,
        fontSize: 14
    },
    percentText: {
        color: Colors.white,
        fontSize: 12,
        marginRight: 8
    },
    imageArrow: {
        width: 22,
        height: 22,
    }
})