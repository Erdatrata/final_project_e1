import React, { useEffect } from "react";
import 'react-native-gesture-handler';
// import things related to React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import onboardingScreen from '../screens/onboardingScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from "../screens/SignupScreen";
import { View } from "react-native";
// create a "stack"

const Stack = createStackNavigator();
const AuthStack = ()=>{
 
    return(
      
    <Stack.Navigator >
    <Stack.Screen
      name="Onboarding"
      component={onboardingScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={({navigation}) => ({
        title: '',
        headerStyle: {
          backgroundColor: '#f9fafd',
          shadowColor: '#f9fafd',
          elevation: 0,
        },
        headerLeft: () => (
          <View style={{marginLeft: 10}}>
            <FontAwesome.Button 
              name="long-arrow-left"
              size={25}
              backgroundColor="#f9fafd"
              color="#333"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        ),
      })}
    />
  </Stack.Navigator>
       
   );
}
export default AuthStack;