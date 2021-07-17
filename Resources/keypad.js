import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Button from './button';


export default function Keypad({
    handleNumber,
    handleNeg,
    handleDecimal,
    handleOperator,
    del,
    clear,
    solve,
}){

    return(
        <View style={styles.keypad}>
            <Button 
            style={styles.btn}
            text='AC'
            onPress={clear}
            color='white'
            textcolor='black'
            />

            <Button 
            style={styles.btn}
            text='+/-'
            onPress={handleNeg}
            color='white'
            textcolor='black'
            />

            <Button 
            style={styles.btn}
            text='%'
            onPress={()=>handleOperator('%')}
            color='white'
            textcolor='black'
            />

            <Button 
            style={styles.btn}
            text='÷'
            onPress={()=>handleOperator('÷')}
            color='rgb(255, 165, 10)'
            />

            <Button 
            style={styles.btn}
            text={'7'}
            onPress={()=>handleNumber(7)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text={'8'}
            onPress={()=>handleNumber(8)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='9'
            onPress={()=>handleNumber(9)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='×'
            onPress={()=>handleOperator('×')}
            color='rgb(255, 165, 10)'
            />

            <Button 
            style={styles.btn}
            text='4'
            onPress={()=>handleNumber(4)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='5'
            onPress={()=>handleNumber(5)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='6'
            onPress={()=>handleNumber(6)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='-'
            onPress={()=>handleOperator('-')}
            color='rgb(255, 165, 10)'
            />

            <Button 
            style={styles.btn}
            text='1'
            onPress={()=>handleNumber(1)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='2'
            onPress={()=>handleNumber(2)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='3'
            onPress={()=>handleNumber(3)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='+'
            onPress={()=>handleOperator('+')}
            color='rgb(255, 165, 10)'
            />

            <Button 
            style={styles.btn}
            text='.'
            onPress={handleDecimal}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='0'
            onPress={()=>handleNumber(0)}
            color='rgb(104, 107, 107)'
            />

            <Button 
            style={styles.btn}
            text='⌫'
            onPress={del}
            color='rgb(128, 6, 6)'
            />

            <Button 
            style={styles.btn}
            text='='
            onPress={()=>solve('main')}
            color='rgb(255, 165, 10)'
            />


        </View>
    );
}

const styles= StyleSheet.create({
    keypad:{
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        flexWrap:'wrap',
        justifyContent:'space-evenly'
        
    },
    btn:{
        marginTop:20,

    }
}
)