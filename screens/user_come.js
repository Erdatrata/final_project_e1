import React, {useEffect, useContext, useState} from 'react';
import Users from '../src/Users';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  RefreshControl, 
  Image,
  ImageBackground,
 
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
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';
import { array } from 'prop-types';

export default function ChatApp() {
  const [currentPage, setCurrentPage] = useState('login');
  const [username, setUsername] = useState(null);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [myData, setMyData] = useState(null);

  const onLogin = async () => {
    try {
      const database = getDatabase();
      //first check if the user registered before

      const user = await findUser();

    const arr=Object.keys(user)
    const array = Object.values( user );
    console.log("t=",array)

    console.log("t_1=",array[0].userImge)
    
      setUsers(array);
    } catch (error) {
      console.error(error);
    }
  };

  const findUser = async () => {
    const database = getDatabase();

    const mySnapshot = await get(ref(database, `user_come`));

    return mySnapshot.val();
  };


  useEffect(() => {
    onLogin();
    
  }, []);
  const onBack = () => {
    setCurrentPage('users');
  };
 
  return (
    <View style={styles.container}>
      {users.map((person) => {
       
        return (
          <Text style={styles.item}  >
          <UserImg  style={styles.stImge}  source={{ uri: person.userImge }}/>
          {person.username}
        </Text>
        );
      })}
  
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

  },
  item: {
    padding: 20,
    fontSize: 20,
    marginTop: 5,
  },
  stImge:{
    width: 50,
    height: 50,
    borderRadius: 25,

  }
});