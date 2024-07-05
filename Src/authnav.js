import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './homepage';
import Branch from './Branch';
import Roadmap from './Roadmap';
import CsdSem from '../Sem/CsdSem';
import CVsem from '../Sem/CVsem';
import Ecsem from '../Sem/Ecsem';
import EeSem from '../Sem/Eesem';
import Cssem from '../Sem/Cssem';
import Mechsem from '../Sem/Mechsem';

import Ysem1 from '../Sub/sem1sub/Sem1';
import Ysem2 from '../Sub/sem1sub/Sem2';



import Cssem5 from '../Sub/Cssub/Sem5';
import Cssem6 from '../Sub/Cssub/Sem6';
import Cssem7 from '../Sub/Cssub/Sem7';
import Cssem8 from '../Sub/Cssub/Sem8';
import Cssem3 from '../Sub/Cssub/Sem3';
import Cssem4 from '../Sub/Cssub/Sem4';

import Cvsem3 from '../Sub/CVsub/Sem3'
import Cvsem4 from '../Sub/CVsub/Sem4'
import Cvsem5 from '../Sub/CVsub/Sem5'
import Cvsem6 from '../Sub/CVsub/Sem6'
import Cvsem7 from '../Sub/CVsub/Sem7'
import Cvsem8 from '../Sub/CVsub/Sem8'


import Ecsem3 from '../Sub/Ecsub/Sem3'
import ECsem4 from '../Sub/Ecsub/Sem4'
import Ecsem5 from '../Sub/Ecsub/Sem5'
import Ecsem6 from '../Sub/Ecsub/Sem6'
import Ecsem7 from '../Sub/Ecsub/Sem7'
import Ecsem8 from '../Sub/Ecsub/Sem8'

import Eesem3 from '../Sub/Eesub/Sem3'
import Eesem4 from '../Sub/Eesub/Sem4'
import Enj from '../Sub/Eesub/Sem5'
import Eesem6 from '../Sub/Eesub/Sem6'
import Eesem7 from '../Sub/Eesub/Sem7'
import Eesem8 from '../Sub/Eesub/Sem8'

import Mesem3 from '../Sub/Mesub/Sem3'
import Mesem4 from '../Sub/Mesub/Sem4'
import Mesem5 from '../Sub/Mesub/Sem5'
import Mesem6 from '../Sub/Mesub/Sem6'
import Mesem7 from '../Sub/Mesub/Sem7'
import Mesem8 from '../Sub/Mesub/Sem8'

import DS from '../Module/CSE/CS32_18'
import CS32_21 from '../Module/CSE/CS32_21'
import CS33_18 from '../Module/CSE/CS33_18'
import CS33_21 from '../Module/CSE/CS33_21'
import CS34_18 from '../Module/CSE/CS34_18'
import CS34_21 from '../Module/CSE/CS34_21'
import CS35_18 from '../Module/CSE/CS35_18';
import CS36_18 from '../Module/CSE/CS36_18';

import CS42 from '../Module/CSE/Sem4/CS42';
import CS43 from '../Module/CSE/Sem4/CS43';
import CS44 from '../Module/CSE/Sem4/CS44';
import CS45 from '../Module/CSE/Sem4/CS45';
import CS46 from '../Module/CSE/Sem4/CS46';

import ECS33 from '../Module/ECE/ECS33';
import ECS34 from '../Module/ECE/ECS34';
import ECS35 from '../Module/ECE/ECS35';


import EEE32 from '../Module/EEE/EEE32';
import EEE33 from '../Module/EEE/EEE33';
import EEE34 from '../Module/EEE/EEE34';
import EEE35 from '../Module/EEE/EEE35';

import ME32_21 from '../Module/MECH/ME32_21';
import ME33_18 from '../Module/MECH/ME33_18';
import ME33_21 from '../Module/MECH/ME33_21';
import ME34_18 from '../Module/MECH/ME34_18';
import ME34_21 from '../Module/MECH/ME34_21';
import ME35_a from '../Module/MECH/ME35_a';
import ME35_b from '../Module/MECH/ME35_b';
import ME36_b from '../Module/MECH/ME36_b';

import BET104C from '../Module/bas/BETCK104C';
import BET105F from '../Module/bas/BETCK105F';
import BKSKK107 from '../Module/bas/BKSKK107';
import BPHYS102 from '../Module/bas/BPHYS102';
import BPOPS103 from '../Module/bas/BPOPS103';
import IDT from '../Module/bas/IDT';
import MODEL from '../Module/bas/MODEL';

const Stack = createNativeStackNavigator();
const Authnav = () => {
  return (
    <Stack.Navigator initialRouteName='Homepage'>
    <Stack.Screen name="Home" component={Homepage} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Road" component={Roadmap} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Br" component={Branch} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="csdsem" component={CsdSem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cvsem" component={CVsem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="ecsem" component={Ecsem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="eesem" component={EeSem} 
      options={{
        headerShown: false,
      }} />
       <Stack.Screen name="cssem" component={Cssem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem" component={Mechsem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Ysem1" component={Ysem1} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Ysem2" component={Ysem2} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem3" component={Cssem3} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem4" component={Cssem4} 
      options={{
        headerShown: false,
      }} /><Stack.Screen name="cssem5" component={Cssem5} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem6" component={Cssem6} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem7" component={Cssem7} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem8" component={Cssem8} 
      options={{
        headerShown: false,
      }} />
       <Stack.Screen name="CVsem3" component={Cvsem3} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem4" component={Cvsem4} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem5" component={Cvsem5} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem6" component={Cvsem6} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem7" component={Cvsem7} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem8" component={Cvsem8} 
      options={{
        headerShown: false,
      }} />


      <Stack.Screen name="Ecsem3" component={Ecsem3} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="ECsem4" component={ECsem4 } 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Ecsem5" component={Ecsem5} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Ecsem6" component={Ecsem6} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Ecsem7" component={Ecsem7} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Ecsem8" component={Ecsem8} 
      options={{
        headerShown: false,
      }} />



<Stack.Screen name="Eesem3" component={Eesem3} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Eesem4" component={Eesem4} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Esem5" component={Enj} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Eesem6" component={Eesem6} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Eesem7" component={Eesem7} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Eesem8" component={Eesem8} 
      options={{
        headerShown: false,
      }} />
       
       <Stack.Screen name="Mesem3" component={Mesem3} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem4" component={Mesem4} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem5" component={Mesem5} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem6" component={Mesem6} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem7" component={Mesem7} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem8" component={Mesem8} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="C" component={DS} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cs32_21" component={CS32_21} 
      options={{
        headerShown: false,
      }} />
    <Stack.Screen name="cs33_18" component={CS33_18} 
      options={{
        headerShown: false,
      }} />
    <Stack.Screen name="cs33_21" component={CS33_21} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cs34_18" component={CS34_18} 
      options={{
        headerShown: false,
      }} />
    <Stack.Screen name="cs34_21" component={CS34_21} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="cs35_18" component={CS35_18} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="cs36_18" component={CS36_18} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="cs42" component={CS42} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="cs43" component={CS43} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="cs44" component={CS44} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cs45" component={CS45} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cs46" component={CS46} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="ecs33" component={ECS33} 
      options={{
        headerShown: false,
      }} />
      
<Stack.Screen name="ecs34" component={ECS34} 
      options={{
        headerShown: false,
      }} />


<Stack.Screen name="ecs35" component={ECS35} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="eee32" component={EEE32} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="eee33" component={EEE33} 
      options={{
        headerShown: false,
      }} />
      
<Stack.Screen name="eee34" component={EEE34} 
      options={{
        headerShown: false,
      }} />
<Stack.Screen name="eee35" component={EEE35} 
      options={{
        headerShown: false,
      }} />


<Stack.Screen name="me3221" component={ME32_21} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="me3318" component={ME33_18} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="me3321" component={ME33_21} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="me3418" component={ME34_18} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="me3421" component={ME34_21} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="me35a" component={ME35_a} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="me35b" component={ME35_b} 
      options={{
        headerShown: false,
      }} />
       <Stack.Screen name="me36b" component={ME36_b} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="bet104c" component={BET104C} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="bet105f" component={BET105F} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="bkskk107" component={BKSKK107} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="bphys102" component={BPHYS102} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="bpops103" component={BPOPS103} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="idt" component={IDT} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="model" component={MODEL} 
      options={{
        headerShown: false,
      }} />

      </Stack.Navigator>


  )
}

export default Authnav