import {render, fireEvent} from 'react-native-testing-library';
import React from 'react';
import SearchInput from '../SearchInput';
import {Provider} from 'react-redux';
import store from '../../store/configureStore';

test('form submits two answers', () => {
  const {getByPlaceholder, getByText} = render(
    <Provider store={store}>
      <SearchInput />
    </Provider>,
  );

  fireEvent.changeText(getByText(''), 'banana');

  expect(store.user.search).toBe('banana');
});
