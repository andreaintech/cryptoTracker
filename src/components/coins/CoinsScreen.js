import React from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useCoinsHook } from '../../hooks/useCoinsHook'
import CoinsItem from './CoinsItem'
import CoinsSearch from './CoinsSearch'
import Colors from '../../res/colors'

const CoinsScreen = () => {
    const navigation = useNavigation()
    const {
        coins,
        setCoins,
        isLoading,
        allCoins
    } = useCoinsHook(null)

    function handlePress(coin) {
        console.log('go to detail')
        navigation.navigate('CoinDetail', { coin })
    }

    const handleSearch = (query) => {
        const coinsFiltered = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(query.toLowerCase())
        })

        setCoins(coinsFiltered)
    }

    return (
        <View style={styles.container}>
            <CoinsSearch
                onChange={handleSearch}
            />
            {
                isLoading ?
                    <>
                        <View style={[styles.container, styles.horizontal]}>
                            <ActivityIndicator size="large" color="#6930c3" />
                        </View>
                    </>
                    :
                    (
                        <>
                            <FlatList
                                data={coins}
                                renderItem={({ item }) => (
                                    <CoinsItem
                                        item={item}
                                        onPress={() => handlePress(item)}
                                    />
                                )}
                                keyExtractor={(item) => item.id}
                            />
                        </>

                    )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.charade
    },
    titleText: {
        textAlign: 'center'
    },
    btn: {
        padding: 8,
        borderRadius: 8,
        margin: 16,
        backgroundColor: 'blue'
    },
    btnText: {
        textAlign: 'center'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})

export default CoinsScreen