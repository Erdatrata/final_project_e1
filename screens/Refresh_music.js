import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  Button, 
  Alert,
} from 'react-native';


import who_come from './user_come';
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { getStorage, ref, deleteObject } from "firebase/storage";
import storage from '@react-native-firebase/storage';
import { firebase } from '@react-native-firebase/auth';

const refresh_music = () => {
    const {user, logout} = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
const getUser = async() => {
        const currentUser = await firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {

            setUserData(documentSnapshot.data());
          
          }
        })
}

  const onLogin = async () => {
    try {
        //first check if the user registered before
        const tamp=await getUser();
        if(userData==null){
            Alert.alert(
                'Try again',
              );
              return null;
        }
        if (userData.fname!="admindna" || userData.email!='ppp@gmail.com'){
          Alert.alert(
              'only adnim',
            );
          return null;
         }
            const storageRef = firebase.storage().ref('uploads');
            storageRef.listAll().then((listResults) => {
              const promises = listResults.items.map((item) => {
                return item.delete();
              });
              Promise.all(promises);
            });       
      
      } catch (error) {
        console.error(error);
      }
    //  const s=database().ref('user_come').remove();
    //  console.log("s=",s)

  };

  return(
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
      בטוח שאתה רוצה לאפס את רשימת השירים של האפליקציה 
      </Text>

    </View>

    <View>
       <View style={styles.buttonText}>
        <Button
          title="אפס"
          onPress={() => onLogin()}
        />
      </View>
    </View>
  </SafeAreaView>
  
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
    borderRadius: 3,
    marginTop: 40,
  }
  
});

export default refresh_music;