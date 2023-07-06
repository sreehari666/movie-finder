import React from 'react'
import './styles/favourites.css'
import { useSelector } from "react-redux";
import MovieCard from '../components/MovieCard';

export default function Favourites() {
  const movies = useSelector(state=>state.FavoriteReducer.data)
  console.log(movies)

  if(movies.length === 0){
    return(
      <div className='fav-container-outer'>
      <h1 className='fav-heading'>Favourites</h1>
      <div style={{height:'50px',display:'flex',justifyContent:'center'}}>
        <p style={{color:'#fff',fontSize:'18px'}}>No movies found !</p>
      </div>

    </div>
    )
  }

  return (
    <div className='fav-container-outer'>
      <h1 className='fav-heading'>Favourites</h1>
      <div className='fav-container'>
        {movies && movies.map((item)=>{
          return(
            <MovieCard key={item.id} id={item.id} home={false} title={item.title} release_date={item.release_date} overview={item.overview} rating={item.vote_average} poster_path={item.poster_path} backdrop_path={item.backdrop_path} />           
          )
        })}
      </div>

    </div>
    )
}
