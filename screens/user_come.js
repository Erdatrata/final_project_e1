import React, {useEffect, useContext, useState} from 'react';
import Users from '../src/Users';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
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

const user_come = ({navigation}) => {
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
    <ScrollView style={styles.container}>
    <View style={styles.container}>
      {users.map((person) => {
       
        return (
          <Pressable  style={styles.row}>
          <Image style={styles.avatar} source={{uri: person.userImge}} />
          <Text style={styles.text}>{person.username} {person.user_lest_name}</Text>
        </Pressable>
        );
      })}
  
    </View>
    </ScrollView>

  );
  
};
export default user_come;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
  },
  addUser: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
});
