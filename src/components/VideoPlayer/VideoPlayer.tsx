import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import colors from '../../theme/colors';

// NB we can do a lot with the github video dependency here by adding more feature
interface IVideoPlayer {
  uri: string;
  paused: boolean;
}
const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);
  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted}
        paused={paused}
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons name={muted ? 'volume-mute' : 'volume-medium'} size={14} color={'white'} />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;
