import AsyncStorage from '@react-native-community/async-storage';

export const getFavoritesFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('favorites');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log(e);
  }
};

export const toggleFavoriteToStorage = async item => {
  try {
    let jsonValue = await AsyncStorage.getItem('favorites');
    jsonValue = jsonValue != null ? JSON.parse(jsonValue) : [];

    if (jsonValue.find(el => el.id === item.id)) {
      jsonValue = jsonValue.filter(v => v.id !== item.id);
    } else {
      jsonValue.push(item);
    }
    return await AsyncStorage.setItem('favorites', JSON.stringify(jsonValue));
  } catch (e) {
    console.log(e);
  }
};
