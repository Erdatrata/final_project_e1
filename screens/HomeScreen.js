import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';

import {Container} from '../styles/FeedStyles';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';

const HomeScreen = () =>{
    const {user,logout}=useContext(AuthContext);
    return (
        <View style={styles.Container}>
        <Text style={styles.text}>Welcome{user.uid}</Text>
        <FormButton buttonTitle='Logout'   onPress={() => logout()} />
        </View>
    );
}
export default HomeScreen;
const styles =StyleSheet.create({
    Container:{
        backgroundColor:'#f9fafd',
        flex:1,
        justifyContent:'center',
        alignnItems:'center',
        padding:20,

    },
    text:{
        fontSize:20,
        color:'#333333'
    }
});