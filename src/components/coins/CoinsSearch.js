import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Colors from '../../res/colors'

const CoinsSearch = ({ onChange }) => {
    const [query, setQuery] = useState("")

    const handleText = (queryy) => {
        setQuery(queryy)
        onChange(queryy)
    }

    return (
        <View>
            <TextInput
                onChangeText={handleText}
                value={query}
                placeholder="Search coin"
                placeholderTextColor={Colors.white}
            />
        </View>
    )
}

export default CoinsSearch

const styles = StyleSheet.create({
    textInput: {

    }
})