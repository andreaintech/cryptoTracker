import React, { useEffect } from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Http from '../../libs/http'

const CoinsScreen = () => {
    const navigation = useNavigation()

    async function getCoins() {
        const coins = await Http.instance.get('https://api.coinlore.net/api/tickers/')

        console.log('coins: ', coins)
    }

    useEffect(() => {

        getCoins()


    })

    function handlePress() {
        console.log('go to detail')
        navigation.navigate('CoinDetail')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Hello, world!</Text>
            <Pressable style={styles.btn} onPress={handlePress}>
                <Text style={styles.btnText}>Ir a detail</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    titleText: {
        color: '#fff',
        textAlign: 'center'
    },
    btn: {
        padding: 8,
        borderRadius: 8,
        margin: 16,
        backgroundColor: 'blue'
    },
    btnText: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default CoinsScreen