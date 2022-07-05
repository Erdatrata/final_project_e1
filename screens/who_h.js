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

import {
  getDatabase,
  get,
  ref,
  set,
  onValue,
  push,
  update,
} from 'firebase/database';
import who_come from './user_come';
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const App_user_come = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
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
    const database = getDatabase();

    try {
      //first check if the user registered before
      const tamp=await getUser();
    const user = await findUser();
    if(userData==null){
        Alert.alert(
          'Confirms the exposure',
            'Click again',
          );
          return null;
    }
    const array = Object.values( user );

    for (var i=0;i<array.length;i++){
      if (array[i].username==userData.fname && array[i].user_lest_name==userData.lname){
        Alert.alert(
          'User Alreadly in list',
        );
        return null;
        
      }
    }
    
    } catch (error) {
      console.error(error);
    }
        
       if ((userData.fname =="" && userData.lname=="" )){
        Alert.alert(
          'you miss',
          'username or user last name.'
        );
        return null;
       
      }
      else{
        const newChatroomRef = push(ref(database, 'user_come'), {
          username:userData.fname,
          user_lest_name:userData.lname,
          userImge:userData.userImg,
         });
         Alert.alert(
          'Succeeded',
          'Add to the list of those who came tonight'
        );
      }

    
     
  };
    const findUser = async()=> {
    const database = getDatabase();
    const mySnapshot = await get(ref(database,`user_come`));

    return mySnapshot.val();
  };
  return(
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
       ברוכים הבאים לעמוד שבו נוכל לדעת מי בא עלינו היום בערב כדי שנוכל לדעת זאת 
       אנחנו צריכים שתאשרו הגעה בלחיצת כפתור מגיע ,
       ובכפתור מי מגיע? תוכל לדעת אילו חברים היום יגיעו לבר (:
      </Text>

    </View>

    <View>
  
      <View style={styles.buttonText}>
      <TouchableOpacity
                onPress={() => {
                  navigation.navigate('user_come');
                }}>
                <Text stle={styles.userBtnTxt}> מי מגיע?</Text>
              </TouchableOpacity>
        </View>
       <View style={styles.buttonText}>
        <Button
          title="מגיע"
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

export default App_user_come;