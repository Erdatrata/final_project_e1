import React from 'react'
import Routes from './Routes';
import { AuthProvider } from './AuthProvider';
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
const Providers = () => {
  return (
    <AuthProvider>
    <Routes />
  </AuthProvider>
  );
}

export default Providers;