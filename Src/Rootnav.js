import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Authnav from './authnav'
const Rootnav = () => {
  return (
    <NavigationContainer>
        <Authnav/>
    </NavigationContainer>
  )
}

export default Rootnav