import React from 'react';
import MapView,{PROVIDER_GOOGLE,Marker, Callout} from 'react-native-maps';
import {View,Text,Button,StyleSheet} from 'react-native';

const ExploreScreen =()=>{
return(
  <MapView
  provider={ PROVIDER_GOOGLE} 
  style={styles.map}
  region={{
    latitude: 22.62938671242907,
    longitude: 88.4354486029795,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
  }}
  >
    <Marker
    coordinate={{
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    }}
    Image={require('../assets/map_marker.png')}
    title="Test Title"
    description="This is decrption"
    />
    {/* <Callout tooltip>
    < View style={styles.bubble}>
    <Text style={styles.name}>
      goof place
    </Text>
    <View style ={styles.arrowBorder}/>
    <View style ={styles.arrow}/>
     </View>   
    </Callout> */}
  </MapView>


);

};
export default ExploreScreen;
const styles = StyleSheet.create({
map:{
height:'100%'
},
container:{
flexDirection:'column',
alignSelf:'flex-start',
},
bubble:{
flaxDirection:'row',
alignSelf:'flex-start',
backgroundColor:'#fff',
borderRadius:6,
borderWidth:0.5,
padding:15,
width:150,
},
arrow:{
backgroundColor:'transparens',
borderColor:'transparens',
borderTopColor:'#fff',
borderWidth:16,
alignSelf:'center',
marginTop:-32,
},
arrowBorder:{
  backgroundColor:'transparens',
  borderColor:'transparens',
  borderTopColor:'#007a87',
  borderWidth:16,
  alignSelf:'center',
  marginTop:-0.5,
},
name:{
  fontSize:16,
  marginBottom:5,
},
Image:{
width:120,
height:80,
}

});
