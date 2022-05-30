import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
  Animated,
} from 'react-native';

import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import songs from './data_1';
import storage from '@react-native-firebase/storage';

const {width, height} = Dimensions.get('window');


const MusicPlayer = () => {

  // console.log("-----songs-----",songs.data_url())
  // console.log("-----songs_1-----",songs.data_url_2())
  const playBackState = usePlaybackState();
  const progress = useProgress();
  //   custom states
  const [posts, setPosts] = useState(null);
  const [elems, setElems] = useState([]);
  const [songIndex, setsongIndex] = useState(0);
  const [repeatMode, setRepeatMode] = useState('off');
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [trackArtwork, setTrackArtwork] = useState();
  // custom referecnces
  // const [refreshing, setRefreshing] = React.useState(false);

  const scrollX = useRef(new Animated.Value(0)).current;
  const songSlider = useRef(null);
  const songs = [
    {
      id: 1,
      title: '19th Floor',
      artist: 'Bobby Richards',
      artwork: require('../assets/img/img1.jpg'),
      url: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2F19th%20Floor%20-%20Bobby%20Richards.mp3?alt=media&token=4fe09d01-c064-440e-9fa7-e02005ebd79f',
    },
    {
      id: 2,
      title: 'Awful',
      artist: 'josh pan',
      artwork: require('../assets/img/img2.jpg'),
      url: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FAwful%20-%20josh%20pan.mp3?alt=media&token=5b174d4c-be09-417c-9fb8-b384f3ce0ec2',
    },
    {
      id: 3,
      title: 'Something is Going On',
      artist: 'Godmode',
      artwork: require('../assets/img/img3.jpg'),
      url: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FSomething%20is%20Going%20On%20-%20Godmode.mp3?alt=media&token=ecf0d5c5-bc93-48c3-9046-077638d12cfd',
    },
    {
      id: 4,
      title: 'Book The Rental Wit It',
      artist: 'RAGE',
      artwork: require('../assets/img/img4.jpg'),
      url: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FBook%20The%20Rental%20Wit%20It%20-%20RAGE.mp3?alt=media&token=6f76a691-fd9c-4057-ac0a-0e39104e865e',
    },
    {
      id: 5,
      title: 'Crimson Fly',
      artist: 'Huma-Huma',
      artwork: require('../assets/img/img5.jpg'),
      url: 'https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FAudio%2FCrimson%20Fly%20-%20Huma-Huma.mp3?alt=media&token=b2d30b27-286e-4d7d-82ad-1bdfa76a4058',
    },
  ];
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }


 
 const fetchProfilePicturesRequest = async () => {
    const reference = await storage()
    .ref(`files`)
    .listAll();
    
    var imageHolder = [];
    
    for(let i=0;i<reference.items.length;i++){
       await reference.items[i].getDownloadURL().then((urlValues) => {
          imageHolder.push(urlValues);
       });
    }
  
    return imageHolder;
    };
    const setupsong = async () => {
      const songs_1=await fetchProfilePicturesRequest();
      const arr_song=[]
      for(var i=0; i< songs_1.length;i++){
        const t= {
          id: i,
          title: '19th Floor',
          artist: 'trak'+i,
          artwork: require('../assets/img/img1.jpg'),
          url:songs_1[i],
        }
        arr_song.push(t)
      }
  
      setElems(arr_song)
      
    }
  const setupPlayer = async () => {

    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
      });
      await TrackPlayer.add(elems);
    } catch (error) {
      console.log("rata=",error);
    }
  };
  
  const togglePlayBack = async playBackState => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    console.log(currentTrack, playBackState, State.Playing);
    if (currentTrack != null) {
      if (playBackState == State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  
 
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artwork, artist} = track;
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const repeatIcon = () => {
    if (repeatMode == 'off') {
      return 'repeat-off';
    }

    if (repeatMode == 'track') {
      return 'repeat-once';
    }

    if (repeatMode == 'repeat') {
      return 'repeat';
    }
  };

  const changeRepeatMode = () => {
    if (repeatMode == 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }

    if (repeatMode == 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }

    if (repeatMode == 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };

  const skipTo = async trackId => {
    await TrackPlayer.skip(trackId);
  };

  useEffect(() => {
 
    console.log("sogs=",elems)
    setupsong();
    setupPlayer();

    scrollX.addListener(({value}) => {
      //   console.log(`ScrollX : ${value} | Device Width : ${width} `);

      const index = Math.round(value / width);
      skipTo(index);
      setsongIndex(index);

      //   console.log(`Index : ${index}`);
    });

    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.destroy();
    };
  }, []);

  const skipToNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  const skipToPrevious = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };


  const renderSongs = ({item, index}) => {
    
    return (
      <Animated.View style={style.mainWrapper}>
        <View style={[style.imageWrapper, style.elevation]}>
          <Image
            //   source={item.artwork}
            source={trackArtwork}
            style={style.musicImage}
          />
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      {/* music player section */}
      {/* <ScrollView
           refreshControl={
              <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              
              />
            }>
        </ScrollView> */}
      <View style={style.mainContainer}>
        {/* Image */}
      

        <Animated.FlatList
          ref={songSlider}
          renderItem={renderSongs}
          data={elems}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />

        {/* Title & Artist Name */}
        <View>
          <Text style={[style.songContent, style.songTitle]}>
            {/* {songs[songIndex].title} */ trackTitle}
          </Text>
          <Text style={[style.songContent, style.songArtist]}>
            {/* {songs[songIndex].artist} */ trackArtist}
          </Text>
        </View>

        {/* songslider */}
        <View>
          <Slider
            style={style.progressBar}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#fff"
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />

          {/* Progress Durations */}
          <View style={style.progressLevelDuraiton}>
            <Text style={style.progressLabelText}>
              {new Date(progress.position * 1000)
                .toLocaleTimeString()
                .substring(3)}
            </Text>
            <Text style={style.progressLabelText}>
              {new Date((progress.duration - progress.position) * 1000)
                .toLocaleTimeString()
                .substring(3)}
            </Text>
          </View>
        </View>

        {/* music control */}
        <View style={style.musicControlsContainer}>
          <TouchableOpacity onPress={skipToPrevious}>
            <Ionicons name="play-skip-back-outline" size={35} color="#FFD369" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
            <Ionicons
              name={
                playBackState === State.Playing
                  ? 'ios-pause-circle'
                  : 'ios-play-circle'
              }
              size={75}
              color="#FFD369"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNext}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFD369"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* bottom section */}
      <View style={style.bottomSection}>
        <View style={style.bottomIconContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity onPress={changeRepeatMode}>
            <MaterialCommunityIcons
              name={`${repeatIcon()}`}
              size={30}
              color={repeatMode !== 'off' ? '#FFD369' : '#888888'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#888888" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    borderTopColor: '#393E46',
    borderWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },

  bottomIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  mainWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  imageWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  elevation: {
    elevation: 5,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  songContent: {
    textAlign: 'center',
    color: '#EEEEEE',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  songArtist: {
    fontSize: 16,
    fontWeight: '300',
  },

  progressBar: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLevelDuraiton: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#FFF',
  },

  musicControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    width: '60%',
  },
});
