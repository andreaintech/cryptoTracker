import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Colors from '../../res/colors'
import FavoritesEmptyState from './FavoritesEmptyState'
import Storage from '../../libs/storage'
import CoinsItem from '../../components/coins/CoinsItem'


const FavoritesScreen = ({ navigation }) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getFavorites()
        })
        return unsubscribe
    }, [navigation])

    const getFavorites = async () => {
        try {
            const allKeys = await Storage.instance.getAllKeys()
            const favoritesKeys = allKeys.filter((key) => (key.includes('favorite-')))
            const favs = await Storage.instance.multiGet(favoritesKeys)
            const myFavorites = favs.map((fav) => JSON.parse(fav[1]))

            setFavorites(myFavorites)
        } catch (error) {
            console.log('[ERROR] FavoriteScreen > allKeys: ', error)
        }
    }

    const handlePress = (coin) => {
        navigation.navigate('CoinDetail', { coin })
    }


    return (
        <View style={styles.container}>
            {favorites ?
                <>
                    <FlatList
                        data={favorites}
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
                <FavoritesEmptyState />
            }
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
