import {showMessage} from 'react-native-flash-message';
import ReactNativeBiometrics from 'react-native-biometrics';

export const checkFingerPrint = async () => {
  try {
    const {biometryType} = await ReactNativeBiometrics.isSensorAvailable();
    if (biometryType === ReactNativeBiometrics.Biometrics) {
      const resultObj = await ReactNativeBiometrics.biometricKeysExist();
      const {keysExist} = resultObj;

      if (!keysExist) {
        const result = await ReactNativeBiometrics.createKeys(
          'Confirm fingerprint',
        );

        const f = await ReactNativeBiometrics.createSignature({
          promptMessage: 'Βαλε δαχτυλο',
          payload: 'george',
          cancelButtonText: 'Nevermind',
        });

        if (f.success) {
          showMessage({
            message: `Fingerprint successfull`,
            type: 'success',
          });
          return true;
        } else {
          showMessage({
            message: `Could not identify fingerprint`,
            type: 'error',
          });
        }
      } else {
        const f = await ReactNativeBiometrics.createSignature({
          promptMessage: 'Βαλε δαχτυλο',
          payload: 'george',
          cancelButtonText: 'Nevermind',
        });

        if (f.success) {
          showMessage({
            message: `Fingerprint successfull`,
            type: 'success',
          });
          return true;
        } else {
          showMessage({
            message: `Could not identify fingerprint`,
            type: 'error',
          });
        }
      }
    }
  } catch (e) {
    showMessage({
      message: `Could not identify fingerprint`,
      type: 'error',
    });
    return false;
  }
};
