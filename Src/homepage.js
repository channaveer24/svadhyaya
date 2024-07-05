import { ImageBackground, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import Logo3 from '../img/Logo3.png'
import V from '../img/V.png'
// import Branch from './Branch'
const Homepage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.rec}>
         <View style={ styles.logout}>
        < Image source={Logo3} style={styles.logo}/>
         </View>  
        </View>
        <View style={styles.Rec2}>
        <Image source={V} style={{width:'80%',height:'100%'}}/>
        </View>
        <View style={styles.text}>
        <TouchableOpacity onPress={()=> navigation.navigate('Br')}>
                <Text style={styles.btn}>Notes
                
                </Text>
            </TouchableOpacity> 
            <TouchableOpacity  onPress={()=> navigation.navigate('Road')}>
                <Text style={styles.btn}>Roadmap
                </Text>
            </TouchableOpacity>
        </View>
    
    
    </View>
  )
}

export default Homepage

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
        height: '60%',
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        backgroundColor: '#FFC300',
        alignItems: 'center',
        justifyContent: 'center',
        top:'-20%',
        elevation:20,
    },
    logout: {
        width:'100%',
      height:'70%',
      //backgroundColor:'#fff',  
      alignItems:'center',
    },
    logo:{
        width:'56%',
        height:'60%',
        top:'30%',
      },
      Rec2:{
        width: '75%',
        height: '30%',
        backgroundColor: '#fff',
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        top:'-35%',
        elevation:10,
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
       
    text :{
        fontSize:18,
        width:'100%',
        color:'#ECF0F1',
        textAlign:'center',
        top:'-19%',
        alignItems:'stretch',
        justifyContent:'space-between',
  
      },
     
})