import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Platform } from 'react-native'
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
                style={[
                    styles.textInput,
                    Platform.OS === 'ios' ? styles.textInputIOS : styles.textInputAndroid
                ]}
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
        height: 46,
        backgroundColor: Colors.charade,
        paddingLeft: 16,
        color: Colors.white
    },
    textInputAndroid: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.zircon
    },
    textInputIOS: {
        margin: 8,
        borderRadius: 8
    }
})