import React from 'react';
import { View, Text, Button,Image,TouchableOpacity,  StyleSheet } from 'react-native';
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
  <Text style={{fontSize:16}}>Skip</Text>
</TouchableOpacity>
)
const Next =({...props}) => (
  <TouchableOpacity
  style={{marginHorizontal:10}}
  {...props}
>
  <Text style={{fontSize:16}}>Next</Text>
</TouchableOpacity>
)
const Done =({...props}) => (
<TouchableOpacity
  style ={{marginHorizontal:8}}
  {...props}>
  <Text style={{fontSize:16}}>Done</Text>
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
          backgroundColor: '#808080',
          image: <Image source={require('../assets/278502601_3092185041111761_6584351267689766855_n.jpg')} />,
    
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/278066007_3086410955022503_5105314485779472516_n.jpg')} />,
      
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/278359575_3090764024587196_257655291605580400_n.jpg')} />,
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
});