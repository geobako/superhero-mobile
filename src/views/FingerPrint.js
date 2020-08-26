import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ReactNativeBiometrics from 'react-native-biometrics';
import AsyncStorage from '@react-native-community/async-storage';

const FingerPrint = () => {
  const seeIfFingerAvailable = async () => {
    try {
      const {biometryType} = await ReactNativeBiometrics.isSensorAvailable();
      await ReactNativeBiometrics.deleteKeys();

      if (biometryType === ReactNativeBiometrics.Biometrics) {
        const resultObj = await ReactNativeBiometrics.biometricKeysExist();
        const {keysExist} = resultObj;
        console.log(resultObj);

        if (!keysExist) {
          const result = await ReactNativeBiometrics.createKeys(
            'Confirm fingerprint',
          );

          const {publicKey} = result;
          await AsyncStorage.setItem('publicKey', publicKey);
          console.log(result);
          // sendPublicKeyToServer(publicKey);
        } else {
          const f = await ReactNativeBiometrics.createSignature({
            promptMessage: 'Sign in',
            payload: 'george',
          });

          console.log(f);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    seeIfFingerAvailable();
  }, []);
  return (
    <SafeAreaView>
      <Text>hi</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default FingerPrint;
