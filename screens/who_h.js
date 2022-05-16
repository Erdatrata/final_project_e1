import React from 'react';
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


const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
       ברןך לעמוד שבו נוכל לדעת מי בא עלינו היום בערב כדי שנוכל לדעת זאת 
       אנחנו צריכים שתאשר הגעה בלחיצת כפתור מגיע ,
       ובכפתור מי בא תוכל לדעת אילו חברים היום יגיעו לבר (:
      </Text>

    </View>

    <View>
  
      <View style={styles.buttonText}>
        <Button
          title="מי מגיע?"
          onPress={() => Alert.alert('Left button pressed')}
        />
        </View>
       <View style={styles.buttonText}>
        <Button
          title="מגיע"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>

      
    </View>
  </SafeAreaView>
);

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

export default App;