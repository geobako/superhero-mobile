import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {setAnimation} from '../utils/util';
import {useDispatch} from 'react-redux';
import Item from '../components/Item';
import {selectHeros} from '../store/selectors';

const Home = ({navigation}) => {
  const heros = useSelector(selectHeros);

  const dispatch = useDispatch();

  const setProfile = data => dispatch({type: 'SET_PROFILE', payload: data});

  const goToProfile = data => {
    setProfile(data);
    navigation.navigate('Profile', {id: data.id});
  };

  const renderItem = ({item}) => {
    return (
      <Animated.View>
        {/* <TouchableOpacity onPress={() => goToProfile(item)}> */}
        <Item item={item} />
        {/* </TouchableOpacity> */}
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={heros}
        initialNumToRender={6}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;
