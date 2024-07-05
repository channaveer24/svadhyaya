import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
const Eesem6 = () => {
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
                <Text style={btn}>Control Systems(18EE61)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Power System Analysis-1(18EE62)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Digital Signal Processing(18EE63)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Computer Aided Electrical Drawing(18EE643)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Renewable Energy Source(18EE653)
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

export default Eesem6

