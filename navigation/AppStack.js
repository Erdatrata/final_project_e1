import React from 'react';
import {View,LogBox, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MessagesScreen from '../screens/MessagesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import DrawerContent from '../screens/DrawerContent';
import getin_function from '../screens/Getin_function';
import num_of_cum from '../screens/Number_customers';
import menu from '../screens/MainTabScreen';
import who_h from '../screens/who_h';
import hookeh_fun from '../screens/Hookah_founction';
import alcohol_fun from '../screens/Alcohol_fouction';
import Food_function from '../screens/Food_function';
import L_and_F from '../screens/Lost_and_found';
import about_us from '../screens/A_us';
const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
const Drawer=createDrawerNavigator()
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
//rata
const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="RN Social"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />
        <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
     <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);
const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />

  </Stack.Navigator>
);
const Getin_function = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="GETIN"
      component={getin_function}
      options={{
        headerShown: false,
      }}
    />
 

  </Stack.Navigator>
);
const Menu_founction=({navigation}) => (
  <Stack.Navigator>
  <Stack.Screen
    name="menu"
    component={menu}
    options={{
      headerShown: false,
    }}
  />
  <Stack.Screen
  name="hookah"
  component={hookeh_fun}
  options={{
    headerTitle: 'Menu hookah',
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#fff',
      shadowColor: '#fff',
      elevation: 0,
    },
  }}
/>
<Stack.Screen
  name="Alcohol"
  component={alcohol_fun}
  options={{
    headerTitle: 'Menu Alcohol',
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#fff',
      shadowColor: '#fff',
      elevation: 0,
    },
  }}
/>
<Stack.Screen
  name="food"
  component={Food_function}
  options={{
    headerTitle: 'Menu Alcohol',
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#fff',
      shadowColor: '#fff',
      elevation: 0,
    },
  }}
/>
</Stack.Navigator>
);
const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };
  return(
    <Drawer.Navigator DrawerContent={(props) => <DrawerContent {...props} />}>
   
      <Drawer.Screen
      // name="Home"
      // component={FeedStack}
    
      name="Home"
      component={FeedStack}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="home" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
      <Drawer.Screen
      name='Message'
      component={MessageStack}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="wechat" style={{fontSize:size,color:color}}/>
            
          ),
        }}
   
      />
      <Drawer.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="user" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
      <Drawer.Screen
      name="GETIN"
      component={Getin_function}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="ils" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
      <Drawer.Screen
      name="Menu"
      component={Menu_founction}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="glass" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
      <Drawer.Screen
      name="who's here?"
      component={who_h}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="users" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />

      <Drawer.Screen
      name="free ride"
      component={ L_and_F}
      options={{
        drawerIcon:({focused,color,size})=>(
            <MaterialCommunityIcons name="car-back" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
      <Drawer.Screen
      name="About us"
      component={ about_us}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="handshake-o" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
    <Drawer.Screen
      name="Log Out"
      component={num_of_cum}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="sign-out" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
    </Drawer.Navigator>
  
  //   <Tab.Navigator
  //   tabBarOptions={{
  //     activeTintColor: '#2e64e5',
  //   }}>
  //   <Tab.Screen
  //     name="Home"
  //     component={FeedStack}
  //     options={({route}) => ({
  //       tabBarLabel: 'Home',
  //       // tabBarVisible: route.state && route.state.index === 0,
  //       tabBarIcon: ({color, size}) => (
  //         <MaterialCommunityIcons
  //           name="home-outline"
  //           color={color}
  //           size={size}
  //         />
  //       ),
  //     })}
  //   />    
  //   <Tab.Screen
  //   name="Messages"
  //   component={MessageStack}
  //   options={({route}) => ({
  //     tabBarVisible: getTabBarVisibility(route),
  //     // Or Hide tabbar when push!
  //     // https://github.com/react-navigation/react-navigation/issues/7677
  //     // tabBarVisible: route.state && route.state.index === 0,
  //     // tabBarLabel: 'Home',
  //     tabBarIcon: ({color, size}) => (
  //       <Ionicons
  //         name="chatbox-ellipses-outline"
  
  //         color={color}
  //         size={size}
  //       />
  //     ),
  //   })}
  // />
  //       <Tab.Screen
  //       name="Profile"
  //       component={ProfileStack}
  //       options={{
  //         // tabBarLabel: 'Home',
  //         tabBarIcon: ({color, size}) => (
  //           <Ionicons name="person-outline" color={color} size={size} />
  //         ),
  //       }}
  //     />
  //      </Tab.Navigator>
  );
}

export default AppStack;
