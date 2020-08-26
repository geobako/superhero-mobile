import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {getHeroes} from '../store/actions';
import {selectSearch, selectSearchLoading} from '../store/selectors';

const SearchInput = () => {
  const value = useSelector(selectSearch);

  const loading = useSelector(selectSearchLoading);

  const dispatch = useDispatch();

  const requestHeroes = search => dispatch(getHeroes(search));

  return (
    <SearchBar
      value={value}
      placeholder="Search"
      loadingIcon={{
        color: 'green',
      }}
      showLoading={loading}
      onChangeText={requestHeroes}
      lightTheme
      containerStyle={styles.container}
      inputStyle={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 0,
  },
  input: {
    height: 50,
  },
});

export default SearchInput;
