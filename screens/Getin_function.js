import React from 'react';
import { View, Text, Button, StyleSheet, FlatList,Linking,TouchableOpacity , Alert } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Getin_function = ({navigation}) => {
    return (
        <View style={styles.text}>
        <Text style={styles.container}> להזמנת כרטיסים באמצעות אתר GETIN</Text>
        <TouchableOpacity
        style={{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:50,
      }} onPress={() => Linking.openURL('https://get-in.com/he/')}
      >
        <MaterialCommunityIcons name={"chevron-left"}  size={30} color="#01a699" />
        <Text >
          GETIN
        </Text>
      </TouchableOpacity>
      </View>
    );
};

export default  Getin_function;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: 'red',
    marginTop: 100,
    paddingLeft: 100,
    paddingRight: 100,
    width: '100%',

  },
  text:{
    backgroundColor: 'black',
    marginTop: 100,
    width: '100%', 
  },
  input: {
    fontSize: 30,
    fontWeight: '100',
    width: '90%',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
    marginTop: 200,
    paddingLeft: 150,
    paddingRight: 100,
    backgroundColor: '#cacaca',
  },
});
