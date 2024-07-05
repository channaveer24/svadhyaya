import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
const ECsem4 = () => {
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
                <Text style={btn}>Analog Circuits(18EC42)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Control System(18EC43)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Engineering Statistics & Linear Algebra(18EC44)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Signals & Systems(18EC45)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Microntroller(18EC46)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Complex Analysis,Probability And Statistical Methods(18MAT41)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Constitution Of India, Professional Ethics& Cyber Law(18CPC39/49)
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

export default ECsem4
