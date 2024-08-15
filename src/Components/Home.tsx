import React, { useEffect, useState } from 'react'
import FilmCard from './FilmCard'
import { fetchFilms } from '../Utils/api';
import { Film } from '../../types/index';




export default function Home() {

  const [films, setFilms] = useState<Film[]>([]);


  useEffect(() => {
    const fetchFilmData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchFilmData();
  }, []);


  return (
    <div>
      <div className="container">
        <div className="row">
          {films.map((film) => (
            <div key={film.id} className="col-md-4">
              <FilmCard film={film} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}









