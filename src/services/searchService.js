import {token} from '../utils/constants';
import axios from 'axios';

export const requestHeros = async search => {
  const heros = await axios.get(
    `https://superheroapi.com/api/${token}/search/${search}`,
  );

  return heros.data.results;
};
