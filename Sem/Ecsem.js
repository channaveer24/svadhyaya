import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../img/V.png'
// import Log3 from'./img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../global/style'

const Ecsem= ({navigation}) => {
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
        
            
            <TouchableOpacity  onPress={()=> navigation.navigate('Ecsem3')}>
                <Text style={btn}>3 Sem
                </Text>
            </TouchableOpacity>

            </ScrollView>
          
    </View>
  )
}

export default Ecsem

