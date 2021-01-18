import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';
import Header from './compenent/header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'



const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};
export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false)

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber)
        setGuessRounds(0)
    }
    const resetGameHandler = (selectedNumber) => {

        setUserNumber()
        setGuessRounds(0)
        // console.log("userNumber", userNumber, "guessRounds", guessRounds)
    }
    const gameOverHandler = (guessRounds) => {
        setGuessRounds(guessRounds)
    }
    console.log("userNumber", userNumber, "guessRounds", guessRounds)
    let content = <StartGameScreen onStartGame={startGameHandler}></StartGameScreen>
    if (userNumber && guessRounds <= 0) {
        content = <GameScreen userChoise={userNumber} reset={resetGameHandler} onGameOver={gameOverHandler}></GameScreen>
    } else if (guessRounds > 0) {
        content = <GameOverScreen userNumber={userNumber} gameRounds={guessRounds} playAgain={resetGameHandler}></GameOverScreen>
    } else {
        content = <StartGameScreen onStartGame={startGameHandler}></StartGameScreen>
    }
    return (


        <View style={styles.screen}>
            <Header title="guess a number" />
            {content}
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

