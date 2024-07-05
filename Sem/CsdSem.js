import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../img/V.png'
// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../global/style'
import Ysem2 from '../Sub/sem1sub/Sem2'
const CsdSem = ({navigation}) => {
  return (
    <View style={container}>
      <View style={rec}>
      < Image source={V} style={logo}/> 
      </View>
    
    <View style={{height:'1%'}}/>
      <ScrollView style={text}>
      <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Home
                </Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Ysem1')}>
                <Text style={btn}>P Cycle
                </Text>
            </TouchableOpacity>
            
            {/* <TouchableOpacity  onPress={()=> navigation.navigate('Ysem2')}>
                <Text style={btn}>C Cycle
                </Text>
            </TouchableOpacity> */}
            
            {/* <View style={{height:'1%'}}/>
            <View style={{height:'1%'}}/>
            <View style={{height:'1%'}}/> */}
            </ScrollView>
            {/* <View style={{height:'%'}}/> */}
    </View>
  )
}

export default CsdSem

