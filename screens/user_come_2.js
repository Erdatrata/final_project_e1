import React, {useState} from 'react';
import Chat from './Chat';
import Login from './Login';
import Users from './Users';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  RefreshControl, 
 
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

      const user = await findUser(username);

      //create a new user if not registered
      if (user) {
        setMyData(user);
      } else {

        Alert.alert(
          'Not eixst!',
          'use youer name and last name!',
        );
          return null;
      }

      // set friends list change listener
      const myUserRef = ref(database, `users/${username}`);
      onValue(myUserRef, snapshot => {
        const data = snapshot.val();
        setUsers(data.friends);
        setMyData(prevData => ({
          ...prevData,
          friends: data.friends,
        }));
      });
      setCurrentPage('users');
    } catch (error) {
      console.error(error);
    }
  };

  const findUser = async name => {
    const database = getDatabase();

    const mySnapshot = await get(ref(database, `users/${name}`));

    return mySnapshot.val();
  };

  const onClickUser = user => {
    setSelectedUser(user);
  };




  switch (currentPage) {
    case 'login':
      return (
        <Login
          onLogin={onLogin}
          username={username}
          setUsername={setUsername}
        />
      );
    case 'users':
      return (
        <Users
          users={users}
          onClickUser={onClickUser}
          userToAdd={userToAdd}
          setUserToAdd={setUserToAdd}
          onAddFriend={onAddFriend}
        />
      );
    case 'chat':
      return (
        <Chat myData={myData} selectedUser={selectedUser} onBack={onBack} />
      );
    default:
      return null;
  }
}
