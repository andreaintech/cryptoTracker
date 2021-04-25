import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, SectionList } from 'react-native'
import Colors from '../../res/colors'

export default function CoinDetailScreen(props) {
    const [coin, setCoin] = useState(props.route.params.coin)
    console.log('============= coin es: ', coin)

    useEffect(() => {
        props.navigation.setOptions({ title: `${coin.symbol}   |   ${coin.name}` })
    }, [props])

    function getIconImage(coinName) {
        if (coinName) {
            return `https://c1.coinlore.com/img/35x35/${coinName}.png`
        }
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

    return (
        <View style={styles.container}>
            <View style={styles.subHeader}>
                <Image
                    source={{
                        uri: getIconImage(coin.nameid),
                    }}
                    style={styles.iconImage}
                    resizeMode="cover"
                />
                <Text style={styles.titleTex}>{coin.name}</Text>
            </View>

            <SectionList
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade
    },
    subHeader: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 16,
        flexDirection: 'row'
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
    sectionHeader: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 8,
    },
    sectionItem: {
        padding: 8,
    },
    itemText: {
        color: Colors.white,
        fontSize: 14,
    },
    sectionText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold'
    }
})
