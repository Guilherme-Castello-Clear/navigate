import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import StackRoutes from './stackRoutes'
import Contato from '../pages/Contato'
import Sobre from '../pages/Sobre'
import CustomDrawer from '../Components/CustomDrawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function Routes(){
  return(
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerStyle:{
          backgroundColor: "#121212"
        },
        drawerActiveBackgroundColor: '#00Dae4',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
      />
      <Drawer.Screen
      name="Contato"
      component={Contato}
    />
    </Drawer.Navigator>
  )

}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})