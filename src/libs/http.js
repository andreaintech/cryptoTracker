class Http {
    static instance = new Http()

    get = async (url) => {
        try {
            let req = await fetch(url)
            let json = await req.json()

            return json
        } catch (error) {
            console.log('http get method error: ', error)

            throw Error(error)
        }
    }

    post = async (url, body) => {
        try {
            let req = await fetch(url, {
                method: 'POST',
                // body: body,
                body
            })
            let json = await req.json()

            return json
        } catch (error) {
            console.log('http post method error: ', error)

            throw Error(error)
        }
    }

    // delete = async (url, body) => {
    //     try {
    //         let req = await fetch(url, {
    //             method: 'DELETE',
    //             // body: body,
    //             body
    //         })
    //         let json = await req.json()

    //         return json
    //     } catch (error) {
    //         console.log('http delete method error: ', error)

    //         throw Error(error)
    //     }
    // }

    // put = async (url, body) => {
    //     try {
    //         let req = await fetch(url, {
    //             method: 'PUT',
    //             // body: body,
    //             body
    //         })
    //         let json = await req.json()

    //         return json
    //     } catch (error) {
    //         console.log('http put method error: ', error)

    //         throw Error(error)
    //     }
    // }
}

export default Http