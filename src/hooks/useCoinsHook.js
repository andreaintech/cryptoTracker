import { useState, useEffect } from 'react'
import Http from '../libs/http'

export const useCoinsHook = (initialValue) => {
    const [coins, setCoins] = useState(initialValue)
    const [isLoading, setIsLoading] = useState(true)

    const getCoins = async () => {

        let response = await Http.instance.get('https://api.coinlore.net/api/tickers/')
        setCoins(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getCoins()
    }, [])

    return [coins, setCoins, isLoading, setIsLoading]
}