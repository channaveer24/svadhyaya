import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../img/V.png'
import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../global/style'

const Branch = ({navigation}) => {
  return (
    <View style={container}>
      <View style={rec}>
      < Image source={V} style={logo}/> 
      </View>
    
    <View style={{height:'7%'}}/>
      <ScrollView style={text}>
      <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
                <Text style={btn}>Home
                </Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('csdsem')}>
                <Text style={btn}>Basic Science
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate('cssem')}>
                <Text style={btn}>Computer Science/IS
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=> navigation.navigate('cvsem')}>
                <Text style={btn}>Civil
                </Text>
            </TouchableOpacity> */}
            <TouchableOpacity  onPress={()=> navigation.navigate('Mesem')}>
                <Text style={btn}>Mechanical
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('ecsem')}>
                <Text style={btn}>Electronics and communication
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('eesem')}>
                <Text style={btn}>Electrical and Electronics
                </Text>
            </TouchableOpacity>
          
           
            </ScrollView>
         
    </View>
  )
}

export default Branch

