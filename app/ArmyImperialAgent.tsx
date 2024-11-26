// screens/ArmyTyranidScreen.js
{/*Pantalla 2*/}
import { router } from 'expo-router';
import React from 'react';
import {Image, StyleSheet,Dimensions,View, Pressable } from 'react-native';
 
const { width } = Dimensions.get('screen');

export default function ArmyImperialAgent () {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <Pressable onPress={()=> router.push('/ImperialAgent')}>
        <Image resizeMode="stretch" source={require('../assets/images/TitleImperialAgentArmyRule.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla ArmyTyranid */}
      <Pressable onPress={()=> router.push('/MinImperialAgent')}>
        <Image resizeMode="stretch" source={require('../assets/images/TitleMinImperialA.jpeg')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5A756E', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 5
  },
});