import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'

const Ecsem3 = ({navigation}) => {
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
        {/* <TouchableOpacity onPress={()=> navigation.navigate()}>
                <Text style={btn}>Network Theory(18EC32)
                </Text>
            </TouchableOpacity> */}
            
            <TouchableOpacity  onPress={()=> navigation.navigate('ecs33')}>
                <Text style={btn}>Electronic Devices(18EC33)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('ecs34')}>
                <Text style={btn}>Digital System Design(18EC34) 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('ecs35')}>
                <Text style={btn}>Computer Organization & Architecture(18EC35)
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Power Electronics & Instrumentation(18EC36)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Network Analysis
                </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Transform Calculus,Fourier Series And Numerical Techniques(18MAT31)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Transform Calculus,Fourier Series And Numerical Techniques(21MAT31)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Constitution OF India, Professional Ethics And Numerical Techniques(18CPC19/49)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Digital System Design using Verilog(21EC32)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Basic Signal Processing(21EC33)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Analog Electronic Circuits(21EC34)
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

export default Ecsem3

