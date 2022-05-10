import React from "react";
import {View,StyleSheet} from 'react-native';
import{
    DrawerContenScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
}from 'react-native-paper';
export  function DrawerContent (props){
    return(
    <View style={{flex:1}}>
        <DrawerContenScrollView {...props}>
        <View style={[styles.userInfoSection,{flexDirection:'row'}]}>
            <View>
                <View style= {
                    {marginTop:15,}
                }>
                    <Avatar.Image source={'https://i.pravatar.cc/150?u='}/>
                </View> 
                <View style={{marginLeft :9,marginTop:15}}>
                    <Title style={styles.title}>Eazy2Code</Title>
                    <Caption style={styles.caption}>@Erdat</Caption>
                </View>
            </View>
        <View style={[styles.row,styles.userInfoSection]}>
            <View style={styles.section}>
                <Paragraph style={[styles.paragraph,styles.caption]}>80</Paragraph>
                <Caption style={styles.caption}>Follwoers</Caption>
            </View>
        <View style={[styles.section,{marginLeft:15}]}>
        <Paragraph style={[styles.paragraph,styles.caption]}>20</Paragraph>
                <Caption style={styles.caption}>Follwoering</Caption>     
            </View>
        </View>
        <Drawer.section style={{flex:1,marginTop:15}}>
            <DrawerItem labal="Home" onPress={()=>{props.navigation.navigation('Home')}}/>
            <DrawerItem labal="Message" onPress={()=>{props.navigation.navigation('Message')}}/>
            <DrawerItem labal="Profile" onPress={()=>{props.navigation.navigation('Profile')}}/>
        </Drawer.section>
        <Drawer.Section title="Preferences">
            <TouchableRipple>
                <View style={styles.paragraph}>
                    <Text>Dark Mode</Text>
                    <Switch/>
                </View>
            </TouchableRipple>
        </Drawer.Section>
    </View>
  </DrawerContenScrollView>
  {/* {LOGOUT} */}
  <Drawer.Section style={styles.bottomDrawerSection}>
      <Drawer.Item labal='Sign Out' onPress={()=>{}}/>
  </Drawer.Section>
</View>  
    );
}

const styles =StyleSheet.create({
userInfoSection:{
flexDirection:'row',
alignItems:'center'
},   
section:{
flexDirection:'row',
alignItems:'center',
marginLeft:0
},
paragraph:{
    fontWeight:'bold',
    marginRight:3,
},
drawerSection:{
    marginTop:15
}, 
bottomDrawerSection:{
    marginBottom:15,
    borderBottomColor:'#f4f4f4',
    borderEndWidth:1
},
performance:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:12,
    paddingHorizontal:16
}
});