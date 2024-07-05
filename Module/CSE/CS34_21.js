import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
// import{Pdf} from 'react-native-openanything' 
import * as OpenAnything from "react-native-openanything"


// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
// import Ysem2 from '../Sub/sem1sub/Sem2'
const CS34_21 = ({navigation}) => {
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
        <TouchableOpacity onPress={()=>OpenAnything.Pdf('https://drive.google.com/file/d/1NScvKHUYzA8v6fnBfhw_Q-jONcqq02Il/view?usp=sharing')}>
                <Text style={btn}>Module 1
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('')}>
                <Text style={btn}>Module 2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('')}>
                <Text style={btn}>Module 3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('')}>
                <Text style={btn}>Module 4
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('')}>
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

export default CS34_21

