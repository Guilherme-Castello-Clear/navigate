import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Contato from './src/pages/Contato'
import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'

const Stack = createNativeStackNavigator()

export default function App(){
  return(

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: 'Tela inicio',
          headerStyle:{
            backgroundColor: '#121212'
          },
          headerTintColor: '#FF0000',
          headerShown:false
        }}name="Home" component={Home}/>

        <Stack.Screen name="Sobre" component={Sobre}/>
        <Stack.Screen name="Contato" component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>

  )

}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})