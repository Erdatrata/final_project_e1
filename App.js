<<<<<<< HEAD
import React from 'react';
import Providers from './navigation';

const App = () => {
  return <Providers/>;
}
export default App;
=======
import React,{Component} from "react";
import 'react-native-gesture-handler';
// import things related to React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { 
  View,
  Text,
  StyleSheet,
  StatusBar, 
}from 'react-native';

import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
// create a "stack"
const MyStack = createStackNavigator();

export default class App extends Component {
  render(){
    return(
       
       <NavigationContainer>
        <MyStack.Navigator >
          
        <MyStack.Screen  name="Login"   component={Login} options={{headerMode: 'none', headerShown : false}} />
        <MyStack.Screen name="Signup"  component={Signup}options={{headerMode: 'none', headerShown : false}} />
        
        </MyStack.Navigator>
        </NavigationContainer> 
        
      
    );
  }
 
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#455a64',
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },

});
>>>>>>> master
