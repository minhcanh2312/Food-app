import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'
// import { TextInput } from 'react-native-gesture-handler'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    console.log(term)
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.inputStyle}
                value={term} 
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15
    },
    inputStyle: {
        borderColor: '#000',
        borderWidth: 1,
        flex: 1,
        fontSize: 18,
        paddingLeft: 10
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    }
})

export default SearchBar