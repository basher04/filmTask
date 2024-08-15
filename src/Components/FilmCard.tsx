import React from 'react'
import { Link } from 'react-router-dom'
import { FilmCardProps } from '../../types/index';



export default function FilmCard({film}:FilmCardProps) {
return (
    <>
        <Link to={`/details/${film.id}`}>
            <div className="card" style={{width: '18rem'}}>
                <img src={film.thumbnailUrl} alt={film.title} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{film.title}</h5>
                    {/* <p className="card-text">{film.description}</p> */}
                </div>
            </div>
        </Link>
    </>
)
}


    
