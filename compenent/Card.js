import React from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native'


const Card  = (props)=>{
return (
    <View style={{...styles.Card,...props.style}}>{props.children}</View>
)
}
const styles = StyleSheet.create({
    Card : {
        shadowColor :'black',
        shadowOffset : {width :0 ,height :2},
        shadowOpacity :0.25,
        shadowRadius :6,
        backgroundColor :'white',
        padding : 20,
        borderRadius : 10,
        elevation :8
    }
})

export default Card
