import AsyncStorage from '@react-native-async-storage/async-storage'

class Storage {

    static instance = new Storage();

    store = async (key, value) => {
        try {
            let response = false
            if (typeof (value) === 'string') {
                await AsyncStorage.setItem(key, value)
                response = true
            }

            console.log('typeof response ', typeof (response))

            return response
        } catch (error) {
            console.log('[ERROR | storage | store]: ', error)

            return false
        }
    }

    get = async (key) => {
        try {
            return await AsyncStorage.getItem(key)
        } catch (error) {
            console.log('[ERROR | storage | get]: ', error)

            throw Error
        }
    }

    remove = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            return true
        } catch (error) {
            console.log('[ERROR | storage | remove]: ', error)
            return false
        }
    }

    multiGet = async (keys) => {
        try {
            return await AsyncStorage.multiGet(keys)
        } catch (error) {
            console.log('[ERROR | storage | multiget]: ', error)

            throw Error
        }
    }

    getAllKeys = async () => {
        try {
            return await AsyncStorage.getAllKeys()
        } catch (error) {
            console.log('[ERROR | storage | getAllKeys]: ', error)
        }
    }

}

export default Storage