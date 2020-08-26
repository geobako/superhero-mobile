import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {SharedElement} from 'react-navigation-shared-element';
import {selectProfile} from '../store/selectors';
import DummyText from '../components/DummyText';

const Profile = ({route}) => {
  const profile = useSelector(selectProfile);
  return (
    <View style={styles.container}>
      <ScrollView>
        <SharedElement id={`image-${route.params.id}`}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{uri: profile.image.url}}
          />
        </SharedElement>
        <View style={styles.innerContainer}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text>{profile.work.occupation}</Text>
        </View>
        <DummyText />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  innerContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    color: 'gray',
  },
});

export default Profile;
