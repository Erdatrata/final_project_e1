import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Button, StyleSheet, FlatList,Linking,TouchableOpacity , Alert, SafeAreaView } from 'react-native';
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
import {AuthContext} from '../navigation/AuthProvider';

const Separator = () => (
  <View style={styles.separator} />
);
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Log_out = ({navigation}) => {
    const {user, logout} = useContext(AuthContext);
    return(   

        // <SafeAreaView style={styles.container}>
        // <View>
        //   <Text style={styles.title}>
        //    ברןך לעמוד שבו נוכל לדעת מי בא עלינו היום בערב כדי שנוכל לדעת זאת 
        //    אנחנו צריכים שתאשר הגעה בלחיצת כפתור מגיע ,
        //    ובכפתור מי בא תוכל לדעת אילו חברים היום יגיעו לבר (:

        //   </Text>
    
        // </View>
        // {Separator}
        // <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>

        // <Text style={styles.userBtnTxt}>Logout</Text>
        // </TouchableOpacity>
        // </SafeAreaView>

        <View style={styles.text}>
        <Text style={styles.container}> בטוח שאתה רוצה לצאת?</Text>
        <TouchableOpacity
        style={{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#ffe4e1',
        borderRadius:50,
      }} onPress={() =>logout() }
      >
        <MaterialCommunityIcons name={"chevron-left"}  size={30} color="#01a699" />
        <Text >
          LOGOUT
        </Text>
      </TouchableOpacity>
      </View>

  );

 
};
export default Log_out;
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
      backgroundColor: '#696969',
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
  

