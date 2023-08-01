import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Contato from './src/pages/Contato'
import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function App(){
  return(

    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF0000',
        tabBarStyle:{
          backgroundColor: '#00003D',
          borderTopWidth: 0
        }
      }}>
        <Tab.Screen options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: (color, size) => {
            return <Feather name='home' color={color} size={size}/>
          }
        }} name="Home" component={Home}/>
        
        <Tab.Screen options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: (color, size) => {
            return <Feather name='file-text' color={color} size={size}/>
          }
        }}name="Sobre" component={Sobre}/>
        <Tab.Screen options={{
          //headerShown: false,
          tabBarLabel: 'Contato',
          tabBarIcon: (color, size) => {
            return <Feather name='phone-call' color={color} size={size}/>
          }
        }} name="Contato" component={Contato}/>
      </Tab.Navigator>
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