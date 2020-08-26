import NodeRSA from 'node-rsa';
import AsyncStorage from '@react-native-community/async-storage';
import ReactNativeBiometrics from 'react-native-biometrics';

export const checkForFingerPrintKey = async () => {
  try {
    const {biometryType} = await ReactNativeBiometrics.isSensorAvailable();
    if (biometryType === ReactNativeBiometrics.Biometrics) {
      const resultObj = await ReactNativeBiometrics.biometricKeysExist();
      const {keysExist} = resultObj;

      if (!keysExist) {
        const result = await ReactNativeBiometrics.createKeys(
          'Confirm fingerprint',
        );

        const {publicKey} = result;
        await AsyncStorage.setItem('publicKey', publicKey);
      }
      return true;
    }
  } catch (e) {
    return false;
  }
};
