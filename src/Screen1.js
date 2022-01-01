import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Screen1 = props => {
  return (
    <View style={styles.screen}>
      <Text>Screen 1</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen2')}
        title="Go to Screen 2"
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

export default Screen1;