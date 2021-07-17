import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";


export default function Button({text,onPress,color,textcolor='white'}){

    const styles= StyleSheet.create({
        view:{
            height:80,
            width:80,
            borderRadius:40,
            backgroundColor:color,
            justifyContent:'center'
        },
        text:{
            color:textcolor,
            fontSize:40,
            textAlign:'center'
        },
        touch:{
            marginTop:15,
            marginRight:2,
            marginLeft:2,

        }
    })

    return(

        <TouchableOpacity onPress={onPress}  style={styles.touch}>
            <View style={styles.view}>

                <Text style={styles.text}>{text}</Text>

            </View>
        </TouchableOpacity>


    );

}

