import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
export default function App(){
  return(
    <View style={styles.container}>
      <Text>Adoro torta de limão</Text>
      <FontAwesome name='home' size={35} color={'blue'}/>
      <FontAwesome name='user' size={35} color={'#54A300'}/>
      <Feather name='gift' size={35} color={'purple'}/>
    
      <TouchableOpacity>
        <FontAwesome
          name='youtube'
          size={55}
          color={'#fff'}
        />
        <Text>Acessar Canal</Text>
      </TouchableOpacity>
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