import React from 'react'
import AppLoading from 'expo-app-loading'

import { View, StyleSheet, Text, Button, Image } from 'react-native'


//                 <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover'></Image>


const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={{ fontSize: 20 }}>The Game is Over  !</Text>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg' }} style={styles.image} resizeMode='cover'></Image>

            </View>
            <Text style={{ fontSize: 20 }}>The Number of Rounds  :  {props.gameRounds}</Text>
            <Text style={{ fontSize: 20 }}>User Number was   :  {props.userNumber}</Text>
            <View style={{ margin: 60, borderColor: 'green', borderRadius: 10, borderWidth: 2 }}>
                <Button color='green' title="PLAY AGAIN" onPress={props.playAgain}></Button>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
export default GameOverScreen