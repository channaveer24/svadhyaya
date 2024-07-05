import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
// import Log3 from'../img/Logo3.png'
import * as OpenAnything from "react-native-openanything"

const Ysem1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rec}>
      < Image source={V} style={styles.logo}/> 
      </View>
    
    <View style={{height:'1%'}}/>
      <ScrollView style={styles.text}>
      <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.btn}>Home
                </Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('bphys102')}>
                <Text style={styles.btn}>Physics(BPHYS102)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate('bpops103')}>
                <Text style={styles.btn}>Principles of Programming Using C(BPOPS103)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('bet104c')}>
                <Text style={styles.btn}>Intruduction Electronics Engineering(BETCK104C)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('bet105f')}>
                <Text style={styles.btn}>Waste Management(BETCK105F)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1DDLLkgD3FhMPd7BJgTABm8QKSQgO7q7K/view?usp=sharing')}>
                <Text style={styles.btn}>Samskrutika kannada(BKSKK107)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate('idt')}>
                <Text style={styles.btn}>Innovation and Design Thinking
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('model')}>
                <Text style={styles.btn}>Module Question papers all subject
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

export default Ysem1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%',
    },
    rec: {
        width: '100%',
        height: '40%',
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
        elevation:20,
        
    },
    logo:{
        width:'80%',
        height:'100%',
        top:'5%',
        justifyContent: 'center',
        alignContent:'center',

      },
      text :{
        // fontSize:18,
        width:'100%',
        color:'#ECF0F1',
        // textAlign:'center',
     
    //   flexDirection:'column',
      height:'80%'
   
     
       
      },
      btn :{
        fontSize:16,
        colour:'#E74C3C',
        textAlign:'center',
        alignItems:'flex-end',
        marginVertical:10,
        marginHorizontal:60,
        fontWeight:'700',
        backgroundColor:'#fff',
        borderColor:'black',
        borderEndColor:'black',
        borderRadius:50,
        padding:10,
         elevation :10,   // paddingHorizontal:20,
  
      },
        Lg:{
        width:'100%',
        height:'10%',
        
        }
      
})