import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
import * as OpenAnything from "react-native-openanything"

// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
// import Ysem2 from '../Sub/sem1sub/Sem2'
const BET104C = ({navigation}) => {
  return (
    <View style={container}>
      <View style={rec}>
      < Image source={V} style={logo}/> 
      </View>
    
    <View style={{height:'1%'}}/>
      <ScrollView style={text}>
      <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
                <Text style={btn}>Home
                </Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1y_Q6DttuXj3U3r10tFnil0f2gL5RL5vB/view?usp=sharing')}>
                <Text style={btn}>Module 1 & 2
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1vk5lbmAHx1UC8F4YjYAmJ_TjXMEkjzZd/view?usp=sharing')}>
                <Text style={btn}>Module 1 (Written)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1D5qfg6e0nWjgyvBAQKyPDdsDaozM63y6/view?usp=sharing')}>
                <Text style={btn}>Module 2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1n0XQV-b2UFHxHYl7xcIMLNJk_klq1zA6/view?usp=sharing')}>
                <Text style={btn}>Module 3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/12stS8RnthCe03LCuo7PpaHLxB6ip_0bD/view?usp=sharing')}>
                <Text style={btn}>Module 4
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1S204LdFy1WA8XBC0syXMl09vDcvcb73X/view?usp=sharing')}>
                <Text style={btn}>Module 5
                </Text>
            </TouchableOpacity>
            
            {/* <View style={{height:'1%'}}/>
            <View style={{height:'1%'}}/>
            <View style={{height:'1%'}}/> */}
            </ScrollView>
            {/* <View style={{height:'%'}}/> */}
    </View>
  )
}

export default BET104C

