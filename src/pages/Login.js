import React,{Component} from 'react';
import { 
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  StatusBar, 
}from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

const Login = props => {
        return(
            <View style={styles.container} >
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}> Don't have an account yet? </Text>
                    <Text style={styles.signupButton}>
                    <Button 
                     onPress={() => props.navigation.navigate('Signup')}
                     title="Signup"

                     hideNavBar={true}
                   />
                    </Text>
                  
                </View>
                
            </View>
        
        )
        
}

const  styles=StyleSheet.create({
    container:{
      backgroundColor:'#455a64',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  
    },
    signupTextCont:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',
    },
    signupText:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
    },
    signupButton:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
    }
  
  });
  export default Login;