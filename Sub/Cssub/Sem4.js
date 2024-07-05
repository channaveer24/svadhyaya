import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'

const Cssem4 = ({navigation}) => {
  return (
    <View style={container}>
      <View style={rec}>
      < Image source={V} style={logo}/> 
      </View>
    
    <View style={{height:'1%'}}/>
      <ScrollView style={text}>
      {/* <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Complex Analysis,Probability and Statistical Methods(18MAT41)
                 </Text>
            </TouchableOpacity> */}
        <TouchableOpacity onPress={()=> navigation.navigate('cs42')}>
                <Text style={btn}>Design and Analysis of Algorithms(18CS42)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate('cs43')}>
                <Text style={btn}>Operatng Systems(18CS43)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('cs44')}>
                <Text style={btn}>Microprocessors and Microntrollers(18CS44)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('cs45')}>
                <Text style={btn}>Object Oriented Concepts(18CS45)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('cs46')}>
                <Text style={btn}>Data Communication(18CS46)
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Constitution Of India Professional Ethics And Cyber Law(18CPC39/49) 
                </Text>
            </TouchableOpacity> */}
            <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
                <Text style={btn}>Home
                </Text>
            </TouchableOpacity>
            
           
            </ScrollView>
           
    </View>
  )
}

export default Cssem4

