import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Http from '../libs/http'

export const useCoinsHook = () => {
    const navigation = useNavigation()
    const [coins, setCoins] = useState(null)
    const [allCoins, setAllCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCoins()
    }, [])

    //* Get coins (fetch data)
    const getCoins = async () => {
        let response = await Http.instance.get('https://api.coinlore.net/api/tickers/')
        setCoins(response.data)
        setAllCoins(response.data)
        setIsLoading(false)
    }

    //* Search for a crypto
    const handleSearch = (query) => {
        const coinsFiltered = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(query.toLowerCase())
        })

        setCoins(coinsFiltered)
    }

    //* Go to detail of selected coin
    function handlePress(coin) {
        navigation.navigate('CoinDetail', { coin })
    }

    return {
        coins,
        setCoins,
        isLoading,
        setIsLoading,
        allCoins,
        handleSearch,
        handlePress
    }
}