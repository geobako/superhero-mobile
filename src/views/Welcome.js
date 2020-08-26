import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';
import Video from 'react-native-video';
import {useDispatch} from 'react-redux';
import {setFavorites} from '../store/actions';
const videobg = require('../assets/videos/smoke.mp4');
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import * as fingerPrintService from '../services/fingerPrintService';

const Welcome = ({navigation}) => {
  const dispatch = useDispatch();

  const getFavorites = () => dispatch(setFavorites());

  useEffect(() => {
    getFavorites();
  }, []);

  const onButtonPress = async () => {
    const shouldLogin = await fingerPrintService.checkFingerPrint();
    if (shouldLogin) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Video
        source={videobg} // Can be a URL or a local file.
        style={styles.backgroundVideo}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        muted
        ignoreSilentSwitch={'obey'}
      />
      <View style={styles.buttonContainer}>
        <TouchableNativeFeedback onPress={onButtonPress}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Procceed</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundVideo: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    alignItems: 'stretch',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttonContainer: {
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '60%',
    backgroundColor: 'purple',
    borderRadius: 15,
  },
  buttonText: {color: 'white', fontSize: 16},
});

export default Welcome;
