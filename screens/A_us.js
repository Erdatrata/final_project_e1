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



const num_customers = ({navigation}) => {
    return (
        <View style={styles.text}>
        <TouchableOpacity onPress={() => Linking.openURL('https://get-in.com/he/')}>
        <Text style={styles.container}> להזמנת כרטיסים באמצעות אתר GETIN</Text>
        <Text style={styles.input}>
          GETIN
        </Text>
      </TouchableOpacity>
      </View>
    );
};

export default  num_customers;

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
