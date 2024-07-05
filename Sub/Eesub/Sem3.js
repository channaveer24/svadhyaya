import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'

// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
const Eesem3 = ({navigation}) => {
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
        
            
            <TouchableOpacity  onPress={()=> navigation.navigate('eee34')}>
                <Text style={btn}>Analog Electronics Circuits(18EE34)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('eee32')}>
                <Text style={btn}>Electric Circuits Analysis(18EE32)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('eee33')}>
                <Text style={btn}>Transform And Generators(18EE33)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('eee35')}>
                <Text style={btn}>Electrical And Electronic Measurements(18EE36)
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Transform Calculus, Fourier Series And Numerical Techniques(18MAT31)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Transform Calculus, Fourier Series And Numerical Techniques(21MAT31)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Constitution OF India, Professional Ethics & Cyber Law(18CPC39/49)
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

export default Eesem3

