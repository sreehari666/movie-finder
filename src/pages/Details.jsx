import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import './styles/details.css'
import GetImagePath from '../api/GetImagePath'
import {AiFillStar} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

export default function Details() {
  const navigate = useNavigate()
  const movie = useSelector(state=>state.FavoriteReducer.details)
  
  const [posterImage,setPosterImage] = useState()

  useEffect(()=>{
    if(movie) {
      setPosterImage(GetImagePath.getImagePath(movie.poster_path))
    }else{
      navigate('/')
    }
  })

  if(!movie) return null

  return (
    <div className='details-container'>
     
      <div className='details-poster-container'>
        <img className='details-poster' src={posterImage} />

      </div>
      <div className='details-inner-container'>
        <h1>{movie.title}</h1>
        <p style={{color:'#ffffff5d'}}>Released on {movie.release_date}</p>
        <div className='details-overview'>{movie.overview}</div>

        <div className='details-rating'>
          Rating {movie.rating}
          <AiFillStar />
        </div>
      </div>
    </div>
  )
}
