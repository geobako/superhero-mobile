/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
  UIManager,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Welcome from './src/views/Welcome';
import Home from './src/views/Home';
import Favorites from './src/views/Favorites';
import FingerPrint from './src/views/FingerPrint';
import Profile from './src/views/Profile';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import SearchInput from './src/components/SearchInput';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Stack = createSharedElementStackNavigator();

const forFade = ({current, closing}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={({navigation, route}) => ({
                cardStyleInterpolator: forFade,
                cardStyle: {
                  backgroundColor: 'transparent',
                },
                headerLeft: null,
                headerTitle: () => <SearchInput />,
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Favorites')}>
                    <Text style={{marginRight: 15, color: '#e8b0a9'}}>
                      Favorites
                    </Text>
                  </TouchableOpacity>
                ),
                headerTitleContainerStyle: {
                  width: '70%',
                },
              })}
            />
            <Stack.Screen
              name="Favorites"
              component={Favorites}
              options={{
                cardStyleInterpolator: forFade,
                headerShown: false,
              }}
            />
            <Stack.Screen name="FingerPrint" component={FingerPrint} />
            <Stack.Screen
              name="Profile"
              sharedElementsConfig={(route, otherRoute, showing) => {
                return [
                  {
                    id: `image-${route.params.id}`,
                    animation: 'fade',
                    resize: 'stretch',
                  },
                ];
              }}
              options={{
                cardStyleInterpolator: forFade,
                headerShown: false,
              }}
              component={Profile}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
