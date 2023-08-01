import React, {useLayoutEffect} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native';


export default function Sobre(){

    const navigation = useNavigation();
    const route = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome
        })
    }, [navigation])

    return(
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button title="Contato" onPress={() => navigation.navigate('Contato')}/>
            <Text>{route.params?.email}</Text>
            <Text>{route.params?.nome}</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
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