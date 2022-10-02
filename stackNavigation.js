import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboardingscreens from './screens/onboardingscreens'
import Login from './screens/Login'
import Home from './screens/Home'


const stack = createNativeStackNavigator()
const StackNavigation = () => {

  return (
        <stack.Navigator>
            <stack.Screen name="onBoarding" component={Onboardingscreens} options={{headerShown:false}}/>
            <stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <stack.Screen name="home" component={Home} options={{headerShown:false}}/>
        </stack.Navigator>
  )
}

export default StackNavigation