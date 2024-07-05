import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../img/V.png'
import Log3 from'../img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../global/style'
import * as OpenAnything from "react-native-openanything"

const Roadmap = ({navigation}) => {
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
        <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1JvLWsUaJ-smnZKBUzc6ctNBni4-0k-Jj/view?usp=sharing')}>
                <Text style={btn}>Backend
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1Wu4UKnD07ZUF41SwR9Wem96AwFUcusbD/view?usp=sharing')}>
                <Text style={btn}>Frontend 
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=> navigation.navigate('cvsem')}>
                <Text style={btn}>Civil
                </Text>
            </TouchableOpacity> */}
            <TouchableOpacity  onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1GEwjxTyB9uU4lHnpB4LVGfqyOBakPHoZ/view?usp=sharing')}>
                <Text style={btn}>DevOps
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1IBJNcl7hPY7UUocikaRuY1jp8uR7xoVN/view?usp=sharing')}>
                <Text style={btn}>Android
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/13DmUA7Vzo5NXzQHDvR9EALQr3vFY_05K/view?usp=sharing')}>
                <Text style={btn}>blockchain
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1yPIVuDWdRQkBquk4CMtG2EURVFSOgkG4/view?usp=sharing')}>
                <Text style={btn}>QA Engineer
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1Ew7CIQXNLpGHzOBSoCI_VvtqhkvSgJdO/view?usp=sharing')}>
                <Text style={btn}>software-architect
                </Text>
                
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1ai9D7NEGuNmqYWBPDIJXTQr1yAmJmJte/view?usp=sharing')}>
                <Text style={btn}>Java
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1ZIZ6VxEI_7zNLh7akx28lhy4NdCKtDxr/view?usp=sharing')}>
                <Text style={btn}>ASP.NET-core
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1GweEhSRoQ_c4-FIUhHwaTSLtAxi0b3aw/view?usp=sharing')}>
                <Text style={btn}>Flutter
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1UrshkcS3kJIyffCXj-jPGHSjhKD0kYgV/view?usp=sharing')}>
                <Text style={btn}>Cyber-Security
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1Lnnj4yR9u0FXrG_S37xEpGHtrqMazvn_/view?usp=sharing')}>
                <Text style={btn}>UX-Design
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/19MQrSQHevAiL3_Nl5uGOy9EPaZWNZo6x/view?usp=sharing')}>
                <Text style={btn}>React
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1c0SsLDaKFijlf88BrvZjbjnZUF1CxXr1/view?usp=sharing')}>
                <Text style={btn}>Javascript
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1xPv32tfRp2HQWtR_IENFYp4fUeFHcsuO/view?usp=sharing')}>
                <Text style={btn}>Python
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1TE00rw4M8h_OhPMmyfa7TWoOd2XEwMId/view?usp=sharing')}>
                <Text style={btn}>Nodejs
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>  OpenAnything.Pdf('https://drive.google.com/file/d/1oYYOs5q5LLhpeX1JmnBD20vDCtpDcDLd/view?usp=sharing')}>
                <Text style={btn}>Typescript
                </Text>
            </TouchableOpacity>
           
           
            </ScrollView>
         
    </View>
  )
}

export default  Roadmap

