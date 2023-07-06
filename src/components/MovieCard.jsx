import React,{useEffect, useState} from 'react'
import './styles/moviecard.css'
import GetImagePath from '../api/GetImagePath'
import {AiFillStar,AiOutlineHeart,AiFillDelete} from "react-icons/ai"
import allActions from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function MovieCard(props) {
  const navigate = useNavigate()

  const [image,setImage] = useState()

  const dispatch = useDispatch()

  const addToFavorite=(data)=>{
    dispatch(allActions.FavouriteAction.AddToFavouriteList(data))
  }
  const removeFavouriteItem=(data)=>{
    dispatch(allActions.FavouriteAction.RemoveItem(data))
  }

  useEffect(()=>{
    setImage(GetImagePath.getImagePath(props.poster_path))
  })
  return (
    <>
    <div className='movie-card-container'>
        <a className='movie-card-link' onClick={()=>{
          dispatch(allActions.FavouriteAction.AddToDeatails(props))
          navigate('/details')}} >
        <img className='movie-card-image' src={image}/>
        <div className='movie-card-rating'>
          {props.rating}
          <AiFillStar/>
        </div>
        <p className='movie-card-release-date'>{props.release_date}</p>
        <div className='movie-card-text-container'>
          
          <p className='movie-card-title'>{props.title}</p>
          <p className='movie-card-overview'>{props.overview}</p>
        
        </div>
        </a>
        {props.home === true ?(
          <button className='movie-card-add-favourite' onClick={()=>{
          addToFavorite(props)}}>
          Add to favourite
          <AiOutlineHeart className='movie-card-heart' size={16} style={{marginLeft:'10px'}} />
        </button>
        ):(
          <button className='movie-card-add-favourite' onClick={()=>removeFavouriteItem(props)}>
          Remove
          <AiFillDelete size={16} style={{marginLeft:'10px'}} />
          </button>
        )}
        
    </div>
    
    </>
  )
}
