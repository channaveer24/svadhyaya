import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
import * as OpenAnything from "react-native-openanything"

// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
// import Ysem2 from '../Sub/sem1sub/Sem2'
const BPHYS102 = ({navigation}) => {
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
        <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/14X4OGkAH5ShfzbuJB55SfxshV2Y5wqOP/view?usp=sharing')}>
                <Text style={btn}>Module 1(Laser)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1eq-xwx9SQfeKi7sFk2AFOJh1Bp2ae5lm/view?usp=sharing')}>
                <Text style={btn}>Module 1(Optical Fiber)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1uVDj-evm-ct6FQ4S2dacPhY9yucPIu8S/view?usp=sharing')}>
                <Text style={btn}>Module 2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1RSxbjkg6ppiBo2T7-7gBW0LOKGiZg-w_/view?usp=sharing')}>
                <Text style={btn}>Module 3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1Kn6vlNGoNcUkUu3FHaG0NAuSLbA_cabr/view?usp=sharing')}>
                <Text style={btn}>Module 4
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1Yq-EAPB6J4bdepMStRnubi3LDpq2n_J-/view?usp=sharing')}>
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

export default BPHYS102

