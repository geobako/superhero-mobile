import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {selectIsInFavorites} from '../store/selectors';
import {toggleFavorite} from '../store/actions';

const Item = ({item}) => {
  const isInFavorites = useSelector(selectIsInFavorites(item.id));
  const dispatch = useDispatch();

  const toggleFavoriteHero = () => {
    dispatch(toggleFavorite(item));
  };

  return (
    <View id="image" style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{uri: item.image.url}}
      />
      <View style={styles.secondContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.gender}>{item.appearance.gender}</Text>
      </View>
      <View style={styles.thirdContainer}>
        <TouchableWithoutFeedback onPress={toggleFavoriteHero}>
          <Icon
            name={isInFavorites ? 'ios-heart' : 'ios-heart-empty'}
            size={30}
            color="#e8b0a9"
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 250,
    marginRight: 15,
  },
  thirdContainer: {
    marginLeft: 'auto',
    marginRight: 20,
  },
  name: {
    fontSize: 16,
  },
  gender: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Item;
