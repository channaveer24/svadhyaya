import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
import * as OpenAnything from "react-native-openanything"

// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
// import Ysem2 from '../Sub/sem1sub/Sem2'
const BET105F = ({navigation}) => {
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
        <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1h3az5GeclFECqbd9tYn9X0ybt3VwCRqN/view?usp=sharing')}>
                <Text style={btn}>Module 1
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1VfQETLkriS7aDXOzl-02LY4wZK5EAwtE/view?usp=sharing')}>
                <Text style={btn}>Module 2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1ShekLNhUtTwTuDShUAbFHDwBdZxAaXwT/view?usp=sharing')}>
                <Text style={btn}>Module 3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1Gf6TAKwzskBRqwUJfxfnCps3ijWE1s2S/view?usp=sharing')}>
                <Text style={btn}>Module 4 (Part-1)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1NJr44ncQQMc1ueREQ-ZTgu3SWv4nwSb5/view?usp=sharing')}>
                <Text style={btn}>Module 4(Part-2)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1c9F4qt1u7b2CJiNFgU5hXLHi4ERzwoiH/view?usp=sharing')}>
                <Text style={btn}>Module 5
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1269m7_H0tB9vmta_QTZkALYTHoD-2hYd/view?usp=sharing')}>
                <Text style={btn}>Model Question bank and Answers
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

export default BET105F

