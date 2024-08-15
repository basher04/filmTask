
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import { FilmDetailsProps } from '../../types'
import { fetchFilmById } from '../Utils/api'

export default function Details( ) {

  const [loading, setLoading] = useState<boolean>(true)
  const [film, setFilm] = useState<FilmDetailsProps | null>(null);
  let x = useParams()

    useEffect(() => {
      const fetchFilmData = async () => {
        if (x) {
          const data = await fetchFilmById(Number(x));
          console.log(data)
          setFilm(data);
          setLoading(false)
        }
      };
      fetchFilmData();
    }, [x]);


    
    if(loading) return <Loading/> 

  return (
    <>
      <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={film.thumbnailUrl} alt={film.title} className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>{film.title}</h1>
              <p><strong>Release Date:</strong> {film.releaseDate}</p>
              <p><strong>Synopsis:</strong> {film.synopsis}</p>
            </div>
          </div>
        </div>
    </>
  )
}
