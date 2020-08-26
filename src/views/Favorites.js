import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Text, StyleSheet, Animated, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../store/selectors';
import FavoriteItem from '../components/FavoriteItem';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  const [offset, setOffset] = useState(0);

  const [scrolled, setScrolled] = useState(false);

  const [changed, setChanged] = useState(false);

  const transY = new Animated.Value(-60);
  const opacit = new Animated.Value(0);

  // const headerDistance = Animated.diffClamp(transY, 0, 60).interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, -1],
  // });

  useEffect(() => {
    if (scrolled && offset === 0 && !changed) {
      Animated.parallel([
        Animated.timing(opacit, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(transY, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setChanged(true);
      });
    } else if (scrolled && changed) {
      Animated.parallel([
        Animated.timing(opacit, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(transY, {
          toValue: -60,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setChanged(false);
      });
    }
  }, [scrolled, offset]);

  console.log(scrolled, offset, changed);

  return (
    <SafeAreaView>
      {scrolled && offset < 10 && (
        <Animated.View
          style={[
            styles.ntonasContainer,
            {transform: [{translateY: transY}], opacity: opacit},
          ]}>
          <Text style={styles.ntonasText}>Ntonas</Text>
        </Animated.View>
      )}
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: 50}}
        onScroll={event => {
          const currOffset = event.nativeEvent.contentOffset.y;

          if (!scrolled) {
            if (currOffset < offset) {
              setScrolled(true);
            }
          }
          setOffset(currOffset);
          //   Animated.event([{nativeEvent: {contentOffset: {y: 0}}}], {
          //   useNativeDriver: true,
          //   listener: event => {
          //     const currOffset = event.nativeEvent.contentOffset.y;

          //     if (!scrolled) {
          //       if (currOffset < offset) {
          //         setScrolled(true);
          //       }
          //     }
          //     setOffset(currOffset);
          //   },
          // })
        }}
        scrollEventThrottle={16}>
        {favorites.map(item => (
          <FavoriteItem item={item} key={item.id} />
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ntonasContainer: {
    width: '100%',
    height: 50,
    position: 'absolute',
    top: 0,
    right: 0,
    borderColor: 'gray',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
});

export default Favorites;
