import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import ChatApp from '../src/ChatApp'
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



const MessagesScreen = ({navigation}) => {
    return (
     <ChatApp/>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
