import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {SharedElement} from 'react-navigation-shared-element';

import {useNavigation} from '@react-navigation/native';

const FavoriteItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const setProfile = () => dispatch({type: 'SET_PROFILE', payload: item});

  const goToProfile = () => {
    setProfile(item);
    navigation.navigate('Profile', {id: item.id});
  };
  return (
    <TouchableWithoutFeedback onPress={goToProfile}>
      <View style={styles.view}>
        <SharedElement id={`image-${item.id}`}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{uri: item.image.url}}
          />
        </SharedElement>
        <SharedElement id={`text-${item.id}`}>
          <Text style={styles.text}>{item.name}</Text>
        </SharedElement>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
    marginHorizontal: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: 350,
    height: 150,
  },
});

export default FavoriteItem;
