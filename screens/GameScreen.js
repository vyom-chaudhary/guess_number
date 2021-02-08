import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import Card from '../compenent/Card'
import Input from '../compenent/input'
import Number from '../compenent/Number'
const generateRandomBetween = (min, max, exclude) => {

    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum
    }
}

const GameScreen = props => {
    const [rounds, setRounds] = useState(0)
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(0, 100, props.userChoise))

    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    console.log("rounds", rounds)
    const { userChoise, onGameOver } = props
    useEffect(() => {
        // console.log("rounds", rounds, "currentGuess", currentGuess, "props.userChoise", props.userChoise)
        console.log(currentLow.current, currentHigh.current, currentGuess)
        if (currentGuess === props.userChoise) {
            // console.log("rounds", rounds, "currentGuess", currentGuess, "props.userChoise", props.userChoise)

            props.onGameOver(rounds)
        }

    }, [currentGuess, userChoise, onGameOver])

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && props.userChoise > currentGuess) || (direction === 'greater' && props.userChoise < currentGuess)) {
            Alert.alert('Dont Lie!', 'You know that is wrong', [{ text: 'Okay', style: 'cancel' }])
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(curRounds => curRounds + 1)
    }
    return (
        <View style={styles.gamescreen}>
            <Text style={{ fontSize: 20 }}>Opponents guess</Text>
            <Number style={{ marginTop: 10 }}>{currentGuess}</Number>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => nextGuessHandler("lower")}></Button>
                <Button title="GREATER" onPress={() => nextGuessHandler("greater")}></Button>
            </Card>
            <Button title="RESET" onPress={props.reset}></Button>

        </View>
    )

}
const styles = StyleSheet.create({
    gamescreen: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen