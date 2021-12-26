import React,{Component} from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
 
}from 'react-native';
export default class Logo extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={{width: 100, height: 100}}
                source={require('../image/Logo.png')}/>
                <Text style={styles.logoText}> app ber</Text>
            </View>
              
        )
    }
};
const  styles=StyleSheet.create({
    container:{
      flexGrow:1,
      justifyContent:'flex-end',
      alignItems:'center'
  
    },
    logoText:{
        marginVertical:17,
        fontSize:19,
        color:'rgba(255,255,255,0.7)'
    }
  
  });