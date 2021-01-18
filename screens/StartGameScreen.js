import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'


import Card from '../compenent/Card'
import Input from '../compenent/input'
import Number from '../compenent/Number'
import BodyText from '../compenent/BodyText'



const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')
    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmHandler = () => {
        const chooseNumber = parseInt(enteredValue)
        console.log(chooseNumber)
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to number between 0 to 99', [{ text: 'Okay', style: 'destructive', onPress: resetHandler }])
            return setConfirmed(false)

        }
        setConfirmed(true)
        setSelectedNumber(chooseNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }
    let number = <Text></Text>
    if (confirmed) {
        number = <Card style={styles.numberBox}>
            <View style={{ marginBottom: 10 }}><Text style={{ fontSize: 15 }}>You Selected </Text></View>
            <Number> {selectedNumber}</Number>
            <View style={styles.start_game_button_style}><Button title='START GAME' onPress={() => props.onStartGame(selectedNumber)}></Button></View>
        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start A New Game!</Text>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a number</BodyText>
                    <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoFocus={true} autoCorrect={false} keyboardType='number-pad' maxLength={2} onChangeText={numberInputHandler} value={enteredValue}></Input>
                    <View style={styles.buttonContainer}>
                        <View style={{ ...styles.button, width: '40%' }}>
                            <Button title="Reset" color='blue' onPress={resetHandler} />
                        </View>
                        <View style={{ ...styles.button, width: '40%' }}>
                            <Button title="Confirm" color='red' onPress={confirmHandler} />
                        </View>
                    </View>
                </Card>
                {number}
            </View >
        </TouchableWithoutFeedback >
    )

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        // width : '50%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    input: {
        fontSize: 35,
        color: 'grey'
    },
    numberBox: {
        marginVertical: 50,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'

    },
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
    start_game_button_style: {
        width: 150,

    }
})

export default StartGameScreen

