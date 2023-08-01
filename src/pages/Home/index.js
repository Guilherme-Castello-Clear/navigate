import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Home(){

    const navigation = useNavigation();
    function navegaSobre(){
        navigation.navigate('Sobre', {nome: 'Castello', email: 'gui@gui.com'})
    }
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Sobre" onPress={() => navegaSobre()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })