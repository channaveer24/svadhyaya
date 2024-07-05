import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
import * as OpenAnything from "react-native-openanything"

// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
// import Ysem2 from '../Sub/sem1sub/Sem2'
const BPOPS103 = ({navigation}) => {
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
        <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1yDNB30ZnEHh26ood1OjWqMePHpPTQGpc/view?usp=sharing')}>
                <Text style={btn}>Module 1
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1EM8fobSErP3auAHjZcheaRmBTjqY93q8/view?usp=sharing')}>
                <Text style={btn}>Module 2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1tvsXfnIvoyNhQ1wJeiAFoc69utXwkhfw/view?usp=sharing')}>
                <Text style={btn}>Module 3 (part-1)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1bA2Ty4xgBP4Wrec5uF2viSxvjvNWkpxz/view?usp=sharing')}>
                <Text style={btn}>Module 3 (part-2)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1g2rou317zdI_FWVA1EKfdWNxnhKoYNVb/view?usp=sharing')}>
                <Text style={btn}>Module 4
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1cPxCqXOKIkb3-ETgQ-TuV0VLDCkWiT1I/view?usp=sharing')}>
                <Text style={btn}>Module 5 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1OM21mcudrI-XnQiUcgMdHu0-ozEC6yhH/view?usp=sharing')}>
                <Text style={btn}>ALL LAB PROGRAMS
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=> OpenAnything.Pdf('')}>
                <Text style={btn}>Module 5
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('')}>
                <Text style={btn}>Module 5
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('')}>
                <Text style={btn}>Module 5
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

export default BPOPS103

