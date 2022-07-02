import React, {useEffect, useContext, useState} from 'react';
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
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export default function ChatApp() {
  const [currentPage, setCurrentPage] = useState('login');
  const [username, setUsername] = useState(null);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [myData, setMyData] = useState(null);
  const [userData, setUserData] = useState(null);
  const {user, logout} = useContext(AuthContext);

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
      const database = await getDatabase();
      //first check if the user registered before
      const username_2=userData.fname+' '+userData.lname
      const user = await findUser(username_2);
      if (username!=username_2){
        Alert.alert(
          'Does not match!',
          'This is not your username!',
        );
          return null;
      }
      //create a new user if not registered
      if (user) {
        setMyData(user);
      } else {

        Alert.alert(
          'Does not exist!',
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
    setCurrentPage('chat');
    setSelectedUser(user);
  };

  const onAddFriend = async name => {
    try {
      //find user and add it to my friends and also add me to his friends
      const database = getDatabase();

      const user = await findUser(name);

      if (user) {
        if (user.username === myData.username) {
          // don't let user add himself
          return;
        }

        if (
          myData.friends &&
          myData.friends.findIndex(f => f.username === user.username) > 0
        ) {
          // don't let user add a user twice
          return;
        }

        // create a chatroom and store the chatroom id

        const newChatroomRef = push(ref(database, 'chatrooms'), {
          firstUser: myData.username,
          secondUser: user.username,
          messages: [],
        });

        const newChatroomId = newChatroomRef.key;

        const userFriends = user.friends || [];
        //join myself to this user friend list
        update(ref(database, `users/${user.username}`), {
          friends: [
            ...userFriends,
            {
              username: myData.username,
              avatar: myData.avatar,
              chatroomId: newChatroomId,
            },
          ],
        });

        const myFriends = myData.friends || [];
        //add this user to my friend list
        update(ref(database, `users/${myData.username}`), {
          friends: [
            ...myFriends,
            {
              username: user.username,
              avatar: user.avatar,
              chatroomId: newChatroomId,
            },
          ],
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onBack = () => {
    setCurrentPage('users');
  };
  useEffect(() => {
    getUser();
    
  }, []);
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
