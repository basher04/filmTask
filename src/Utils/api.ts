
import axios from 'axios';
import { baseURL } from './Baseurl';
import { Film } from '../../types';



export const fetchFilms = async (): Promise<Film[]> => {
  const response = await axios.get<Film[]>(baseURL);
  return response.data;
};

export const fetchFilmById = async (id: number): Promise<Film> => {
  const response = await axios.get<Film>(`${baseURL}/${id}`);
  return response.data;
};
