import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'

const Number = props => {
    return (
        <View style={{ ...styles.number, ...props.style }}><Text style={{ fontSize: 28, textAlign: 'center', marginRight: 9 }}> {props.children}</Text></View>
    )

}
const styles = StyleSheet.create({
    number: {
        // width: '100%',
        // marginVertical: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: '#C71585',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
    },
})
export default Number
