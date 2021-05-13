import React from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native'
import { useCoinsHook } from '../../hooks/useCoinsHook'
import CoinsItem from './CoinsItem'
import CoinsSearch from './CoinsSearch'
import Colors from '../../res/colors'

const CoinsScreen = () => {
    const {
        coins,
        isLoading,
        handleSearch,
        handlePress
    } = useCoinsHook()

    return (
        <View style={styles.container}>
            <CoinsSearch
                onChange={handleSearch}
            />
            {
                isLoading ?
                    <>
                        <View style={[styles.container, styles.horizontal]}>
                            <ActivityIndicator size="large" color={Colors.purple} />
                        </View>
                    </>
                    :
                    (
                        coins.length ?
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
                            :
                            <View style={[styles.container, styles.horizontal]}>
                                <Text style={styles.coinsNotFoundText}>No search results were found</Text>
                            </View>
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
    },
    coinsNotFoundText: {
        color: Colors.white,
        padding: 20
    }
})

export default CoinsScreen