import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
import * as OpenAnything from "react-native-openanything"

// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
// import Ysem2 from '../Sub/sem1sub/Sem2'
const IDT = ({navigation}) => {
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
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/13P29RjRhwTQ1mkJgMs3lOYzN0Xg0jtGO/view?usp=sharing')}>
                <Text style={btn}>IDT QUESTIONBANK MODULE 1 AND 2
                </Text>
            </TouchableOpacity>
        
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1qGQBlwAF3zE-nMpdpvXlhRQi1gb9bdLL/view?usp=sharing')}>
                <Text style={btn}>MODULE-3  IDT QUESTION BANK
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1zY_WyKt6P0lmfBGSwP84NN8pH1ah1Fc0/view?usp=sharing')}>
                <Text style={btn}>21IDT19set1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/10ldklTzA24jzr1CAw0v6nUBRdRyuj9sg/view?usp=sharing')}>
                <Text style={btn}>21IDT19set2 
                </Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1fSEAqsQEL1v3iFbbUrQdsrSrisiCQjQ-/view?usp=sharing')}>
                <Text style={btn}>22IDT28 
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

export default IDT

