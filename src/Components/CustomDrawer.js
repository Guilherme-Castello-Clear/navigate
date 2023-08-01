import React from 'react';
import { View, Text } from 'react-native';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image } from 'react-native';

export default function CustomDrawer(props){
    return(
        <DrawerContentScrollView {...props}>
            <View style={{
                width:'100%',
                height: 85,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30
            }}>
                <Image source={require('../assets/perfil.png')} style={{width:65, height: 65}}/>
                <Text>Bem vindo!</Text>
            </View>

            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}