import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'

// import Log3 from'../img/Logo3.png'
const Cssem7 = () => {
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
        <TouchableOpacity onPress={()=> navigation.navigate()}>
                <Text style={btn}>Web Technology and its Application
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Advanced Computer Architecture
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Machine Learning
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>unix System Programming
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Storage Aea Networks
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Cloud Computing
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Information and Network
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>user Interface Design
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Artificial Intelligence And Machine Learning
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>user Interfacce Design
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>user Interfacce Design
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>user Interfacce Design
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>user Interfacce Design
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

export default Cssem7

