import { useState, useEffect } from 'react'
import Http from '../libs/http'

export const useCoinsHook = (initialValue) => {
    const [coins, setCoins] = useState(initialValue)
    const [allCoins, setAllCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getCoins = async () => {

        let response = await Http.instance.get('https://api.coinlore.net/api/tickers/')
        setCoins(response.data)
        setAllCoins(response.data)
        setIsLoading(false)
    }

    // const handleSearch = (query) => {
    //     const coinsFiltered = allCoins.filter((coin) => {
    //         return coin.name.toLowerCase().includes(query.toLowerCase()) ||
    //             coin.symbol.toLowerCase().includes(query.toLowerCase())
    //     })

    //     setCoins(coinsFiltered)
    // }

    useEffect(() => {
        getCoins()
    }, [])

    return { coins, setCoins, isLoading, setIsLoading, allCoins }
}