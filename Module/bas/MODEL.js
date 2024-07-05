import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
import * as OpenAnything from "react-native-openanything"

// import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'
// import Ysem2 from '../Sub/sem1sub/Sem2'
const MODEL = ({navigation}) => {
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
        <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1dQ3RrDX8LYhcdzcBfSs9dr981n0ksGwr/view?usp=sharing')}>
                <Text style={btn}>2MATS11set1
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1gjpGzYMhDA-2ucAP1NtCF__ftoKaJDiK/view?usp=sharing')}>
                <Text style={btn}>2MATS11set2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1R-Qf_OFV47cO5keRQXn4xfPZMzEL9_7h/view?usp=sharing')}>
                <Text style={btn}>22ESC143set1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/14B4Pw-dIb4lqB6jk0YxlnA5lR3aecpfB/view?usp=sharing')}>
                <Text style={btn}>22ESC143set2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/18n0U4UZ48NeEvWloOa1D9hUfYqxA8juV/view?usp=sharing')}>
                <Text style={btn}>22PHYS12set1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1BN46b7eZjsgjv1nPC4DkL4nl5lJVwy4A/view?usp=sharing')}>
                <Text style={btn}>22PHYS12set2
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1RkVGFqrbMlk7r8lieeP8rg1vJEM2P-O9/view?usp=sharing')}>
                <Text style={btn}>22POP13set1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1RYy5etGodZmqp5Nmw2AkG2a123H0kxWT/view?usp=sharing')}>
                <Text style={btn}>22POP13set2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1WQSflHEtoaey2240YD8UNZYO6TLrHBd8/view?usp=sharing')}>
                <Text style={btn}>22POP13set3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1VK1dxaUBlr8rHSG9n0yTjJ1FWS_GPX8-/view?usp=sharing')}>
                <Text style={btn}>Question_Bank_samskruhika kannada
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

export default MODEL

