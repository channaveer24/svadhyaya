import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
// import Log3 from'../img/Logo3.png'
const Ecsem6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rec}>
      < Image source={V} style={styles.logo}/> 
      </View>
    
    <View style={{height:'1%'}}/>
      <ScrollView style={styles.text}>
      <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={styles.btn}>Home
                </Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate()}>
                <Text style={styles.btn}>Digital Communication(18EC61)
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={styles.btn}>ARM Microntroller & Embedded Systems(18EC62)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={styles.btn}>Microwave & Antenna(18EC63)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={styles.btn}>Digital System Design Using Verilog(18EC644)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={styles.btn}>Sensor And Signal Conditioning(18EC652)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={styles.btn}>Artificial Neural Network(18EC642)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={styles.btn}>Pyhton Application Programming(18EC646)
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

export default Ecsem6

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