import React from 'react';
import { View, Text, Button,Image,TouchableOpacity,  StyleSheet  } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
      <View 
          style={{
              width:6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor
          }}
      />
  );
}
const Skip=({...props})=>(
  <TouchableOpacity
  style={{marginHorizontal:10}}
  {...props}
>
  <Text style={styles.innerText}>Skip</Text>
</TouchableOpacity>
)
const Next =({...props}) => (
  <TouchableOpacity
  style={{marginHorizontal:10}}
  {...props}
>
  <Text style={styles.innerText}>Next</Text>
</TouchableOpacity>
)
const Done =({...props}) => (
<TouchableOpacity
  style ={{marginHorizontal:8}}
  {...props}>
  <Text style={styles.innerText}>Done</Text>
</TouchableOpacity>
)

const onboardingScreen = ({navigation}) => {

    return (
      <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: 'black',
          image: <Image source={require('../assets/posts/Screenshot_20220516-141718_Facebook.jpg')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: 'black',
          image: <Image source={require('../assets/posts/Screenshot_20220516-141743_Facebook.jpg')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: 'black',
          image: <Image source={require('../assets/posts/Screenshot_20220516-141752_Facebook.jpg')} />,
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
       ]}
    />
    );
};

export default onboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  innerText: {
    color: 'red',
    fontSize:16
  }
});