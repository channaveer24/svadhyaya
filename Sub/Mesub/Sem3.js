import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
const Mesem3 = ({navigation}) => {
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
        <TouchableOpacity onPress={()=> navigation.navigate('me3221')}>
                <Text style={btn}>Mechanics of Materials(18ME32)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate('me3318')}>
                <Text style={btn}>Basic Thermodynamics(18ME33)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('me3418')}>
                <Text style={btn}>Material Scrience(18ME34)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('me35b')}>
                <Text style={btn}>Metal Casting And Welding
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=> navigation.navigate('me35b')}>
                <Text style={btn}>Mechanical Measurements and Metrology(18ME35B)
                </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Transform Calculus, Fourier Series And Numerical Techniques(18MAT31)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Transform Calculus, Fourier Series And Numerical Techniques(21MAT31)
                </Text>
            </TouchableOpacity> */}
            <TouchableOpacity  onPress={()=> navigation.navigate('me35a')}>
                <Text style={btn}>Metal Cutting And Formating(18ME35A)
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Constitution Of India Professional Ethics And Cyber Law(18CPC39/49)
                </Text>
            </TouchableOpacity> */}
            <TouchableOpacity  onPress={()=> navigation.navigate('me3221')}>
                <Text style={btn}>Metal Casting,Forming And Joining Processes(21ME32)
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=> navigation.navigate('me3321')}>
                <Text style={btn}>Material Science and Engineering(21ME33)
                </Text>
            </TouchableOpacity> */}
            <TouchableOpacity  onPress={()=> navigation.navigate('me3421')}>
                <Text style={btn}>Thermodynamics(21ME34)
                </Text>
            </TouchableOpacity>
            
            </ScrollView>
            
    </View>
  )
}

export default Mesem3

