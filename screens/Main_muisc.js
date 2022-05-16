import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import MusicPlayer from './MusicPlayer';

const muisc_function = () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
};

export default muisc_function;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});


