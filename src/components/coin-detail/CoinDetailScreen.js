import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, FlatList, SectionList, Pressable } from 'react-native'
import Http from '../../libs/http'
import Storage from '../../libs/storage'
import Colors from '../../res/colors'

export default function CoinDetailScreen(props) {
    const [coin, setCoin] = useState(props.route.params.coin)
    const [markets, setMarkets] = useState([])
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        props.navigation.setOptions({ title: `${coin.symbol}   |   ${coin.name}` })

        getMarkets(coin.id)
    }, [props])

    function getIconImage(coinName) {
        if (coinName) {
            return `https://c1.coinlore.com/img/35x35/${coinName}.png`
        }
    }

    const getMarkets = async (coinId) => {
        let url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`

        const markets = await Http.instance.get(url)
        setMarkets(markets)
    }

    function getSections(coin) {
        const sections = [
            {
                title: 'Market cap',
                data: [coin.market_cap_usd]
            },
            {
                title: 'Volume 24h',
                data: [coin.volume24]
            },
            {
                title: 'Change 24h',
                data: [coin.percent_change_24h]
            },
        ]

        return sections
    }

    const renderFlatListItem = (item) => {
        return (
            <View style={styles.containerItem}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>{item.price_usd}</Text>
            </View>
        )
    }

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites()
        } else {
            addToFavorites()
        }
    }

    const addToFavorites = async () => {
        const jsonCoin = JSON.stringify(coin)
        const key = `favorite-${coin.id}`

        const stored = await Storage.instance.store(key, jsonCoin)
        if (stored) {
            setIsFavorite(true)
        }
    }

    const removeFromFavorites = () => {
        const key = `favorite-${coin.id}`

        Storage.instance.remove(key)
            .then((response) => {
                if (response) {
                    setIsFavorite(false)
                }
            })
            .catch((error) => {
                console.log('[ERROR] CoinDetailScreen > addToFavorites: ', error)
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.subHeader}>
                <View style={styles.row}>
                    <Image
                        source={{
                            uri: getIconImage(coin.nameid),
                        }}
                        style={styles.iconImage}
                        resizeMode="cover"
                    />
                    <Text style={styles.titleTex}>{coin.name}</Text>
                </View>

                <Pressable
                    onPress={toggleFavorite}
                    style={[
                        styles.btnFavorite,
                        isFavorite ? styles.btnRemoveFavorite : styles.btnAddFavorite
                    ]}>
                    <Text style={styles.btnFavoriteText}>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</Text>
                </Pressable>
            </View>

            <SectionList
                style={styles.section}
                sections={getSections(coin)}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.sectionItem}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionText}>{section.title}</Text>
                    </View>
                )}
            />

            <Text style={styles.marketsTitle}>Markets</Text>
            <FlatList
                style={styles.list}
                horizontal={true}
                data={markets}
                renderItem={({ item }) => renderFlatListItem(item)}
                // keyExtractor={item => item.id}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade
    },
    row: {
        flexDirection: 'row'
    },
    marketsTitle: {
        fontSize: 16,
        color: Colors.white,
        marginBottom: 16,
        marginLeft: 16,
        fontWeight: 'bold',
    },
    list: {
        maxHeight: 100,
        paddingLeft: 20
    },
    containerItem: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        // borderColor: Colors.zircon,
        borderColor: Colors.white,
        borderWidth: 1,
        padding: 16,
        marginRight: 8,
        alignItems: 'center'
    },
    nameText: {
        color: Colors.white,
        fontWeight: 'bold'
    },
    priceText: {
        color: Colors.white,
    },
    subHeader: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleTex: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        marginLeft: 8
    },
    iconImage: {
        width: 35,
        height: 35,
    },
    section: {
        maxHeight: 220,
    },
    sectionHeader: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 8,
        paddingLeft: 25
    },
    sectionItem: {
        padding: 8,
        marginLeft: 16
    },
    itemText: {
        color: Colors.white,
        fontSize: 14,
    },
    sectionText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold'
    },
    btnFavorite: {
        padding: 8,
        borderRadius: 8,
    },
    btnAddFavorite: {
        backgroundColor: Colors.picton
    },
    btnRemoveFavorite: {
        backgroundColor: Colors.carmine
    },
    btnFavoriteText: {
        color: Colors.white
    }
})
