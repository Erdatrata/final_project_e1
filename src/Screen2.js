import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Screen2 = props => {
  return (
    <View style={styles.screen}>
      <Text>Screen 2</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen1')}
        title="Go to Screen 1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen2;