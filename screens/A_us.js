import React from 'react';
import { View, Text, Button, StyleSheet, FlatList,Linking,TouchableOpacity , Alert, SafeAreaView,Image } from 'react-native';
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


const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  
  <SafeAreaView style={styles.container}>
     <Image source={require('../assets/posts/Screenshot_20220516-141718_Facebook.jpg')} >
    </Image>
    <View>

      <Text style={styles.title_1}>
        
              מוזיקה:   
           Danchall and Hip-HOP    
           {"\n"}
           {"\n"}
           מקום:
                            חומה ומגדל 11 תל אביב
            {"\n"}
           {"\n"}
           גילאים:  
            בנות: 21
,
            גברים : 26    
      </Text>
    </View>
    <View>
   

    </View>
   
  </SafeAreaView>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal:0 ,
    backgroundColor:'black'
  },
  title_1: {
    marginTop: -1000,
   marginVertical: 8,
   color: 'red',
   fontWeight: 'bold',
   fontSize: 18,
  },
  title_2: {
    marginTop: -300,
   marginVertical: 8,
   fontSize: 18,
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

export default App;